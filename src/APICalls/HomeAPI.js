import axios from 'axios';
import cookie from 'react-cookies';
import {user_search_url} from "./URLs";


export async function searchUserInformation(email_id) {
	let response = await axios.get(user_search_url, {
		params: {
			e_id: email_id
		},
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Authorization": cookie.load("_ref_i_token_")
		}
	}).then(res => {
		console.log('User details ', res);
		return res;
	}).catch(err => {
		console.log('Error ', err);
		return null;
	});
	return response;
}