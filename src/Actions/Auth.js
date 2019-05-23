import axios from 'axios';
import cookie from 'react-cookies';
import history from '../history';
import {user_info_url} from '../APICalls/URLs';

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
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => {
            console.log('Success response ', res);
            dispatch({
                type: "store_user_signIn_response",
                payload: true
            });
        }).catch(err => {
            console.log('Failure response ', err);
            dispatch({
                type: "store_user_signIn_response",
                payload: false
            });
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

            dispatch({
                type: "store_user_info",
                payload: res.data.Items[0]
            });
            history.push('/home');
        }).catch(err => {
            console.log('Error ', err);
            dispatch({
                type: "store_user_info",
                payload: null
            })
        });
    }
}

/*
    Restore user information in redux state from localstorage
 */
export function reStoreUserInfoInReduxState(user_info) {
    return dispatch => {
        dispatch({
            type: "store_user_info",
            payload: user_info
        });
    }
}