import {gp_creation_response, gp_user_group_list} from '../Store/StoreConstant';

export const userGroupList = (state = {gp_creation_response, gp_user_group_list}, action) => {
	switch (action.type) {
		case "add_new_user_group":
			let user_info = JSON.parse(localStorage.getItem('user_info'));
			user_info.groups.push(action.payload.group_id);
			localStorage.setItem('user_info', JSON.stringify(user_info));
			state = {
				...state,
				gp_user_group_list: gp_user_group_list !== undefined ? gp_user_group_list.concat(action.payload) : action.payload
			};
			break;
		case "group_creation_response":
			state = {
				...state,
				gp_creation_response: action.payload
			};
			break;
		case "user_group_list_response":
			state = {
				...state,
				gp_user_group_list: action.payload
			};
			break;
		default:
			break;
	}
	return state;
};