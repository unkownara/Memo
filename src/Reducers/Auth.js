import {sc_user_info, sc_signIn_response} from '../Store/StoreConstant';

export const userAuth = (state = {sc_user_info, sc_signIn_response}, action) => {
    switch (action.type) {
        case "store_user_info":
            state = {
                ...state,
                sc_user_info: action.payload
            };
            break;
        case "store_user_signIn_response":
            state = {
                ...state,
                sc_signIn_response: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};