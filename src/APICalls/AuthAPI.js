import axios from 'axios';
import cookie from 'react-cookies';
import history from '../history';
import {user_info_url} from './URLs';
import {storeUserSignInResponse, storeUserInformationInLocal} from '../Actions/Auth';

export function storeUserInformation(user_info) {
    axios({
        method: "POST",
        url: user_info_url,
        data: JSON.stringify({
            user_info: user_info
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
            // "Authorization": cookie.load("_ref_i_token_")
        }
    }).then(res => {
        console.log('Success response ', res);
        storeUserSignInResponse(true);
    }).catch(err => {
        console.log('Failure response ', err);
        storeUserSignInResponse(false);
    });
}

export function getUserInformation(u_id) {
    let resObj = {};
    axios.get(user_info_url, {
        params: {
            u_id: u_id
        },
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": cookie.load("_ref_i_token_")
        }
    }).then(res => {
        console.log('User details ', res.data.Items[0]);
        resObj = {
            status: true,
            res: res.data.Items[0]
        };
        storeUserInformationInLocal(resObj);
        history.push('/home');
    }).catch(err => {
        console.log('Error ', err);
        resObj = {
            status: false,
            res: err
        };
        storeUserInformationInLocal(resObj);
    });
}