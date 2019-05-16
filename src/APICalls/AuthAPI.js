import axios from 'axios';
import cookie from 'react-cookies';
import {user_info_url} from './URLs';

export function storeUserInformation(user_info) {
    return dispatch => {
        axios({
            method: "POST",
            url: user_info_url,
            data: JSON.stringify({
                user_info: user_info
            }),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": cookie.load("_ref_i_token_")
            }
        }).then(res => {
            console.log('Success response ', res);
        }).catch(err => {
            console.log('Failure response ', err);
        });
    }
}

export function getUserInformation(u_id) {
    return dispatch => {
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
        }).catch(err => {
            console.log('Error ', err);
        });
    }
}