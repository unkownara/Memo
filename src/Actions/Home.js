import axios from 'axios';
import cookie from 'react-cookies';
import {group_url, user_group_list_url, user_info_url, user_search_url} from "../APICalls/URLs";
import history from "../history";

export function groupCreation(user_info, group_info) {
	return dispatch => {
		axios({
			method: "POST",
			url: group_url,
			data: JSON.stringify({
				user_info: user_info,
				group_info: group_info
			}),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Authorization": cookie.load("_ref_i_token_")
			}
		}).then(res => {
			console.log('Success response ', res);
			dispatch({
				type: "group_creation_response",
				payload: true
			});
		}).catch(err => {
			console.log('Failure response ', err);
			dispatch({
				type: "group_creation_response",
				payload: false
			});
		});
	}
}

export function userGroupList(u_group_list) {
	return dispatch => {
		let resObj = {};
		axios({
			method: "POST",
			url: user_group_list_url,
			data: JSON.stringify({
				group_list: u_group_list
			}),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Authorization": cookie.load("_ref_i_token_")
			}
		}).then(res => {
			console.log('user group list ', res.data);
			resObj = {
				status: true,
				res: res.data
			};
			dispatch({
				type: "user_group_list_response",
				payload: res
			});
			/*
				_u_g_ls -> User group list
			 */
			localStorage.setItem('_u_g_ls', JSON.stringify(res.data));
		}).catch(err => {
			console.log('Error ', err);
			resObj = {
				status: false,
				res: err
			};
			dispatch({
				type: "user_group_list_response",
				payload: resObj
			});
		});
	}
}

/*
    Add newly created user group.
 */
export function addNewGroupInLocalStore(new_user_group) {
	return dispatch => {
		dispatch({
			type: "add_new_user_group",
			payload: new_user_group
		})
	}
}