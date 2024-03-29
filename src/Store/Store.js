import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userAuth } from "../Reducers/Auth";
import { userGroupList } from "../Reducers/Home";
import { toggleSideNav } from "../Reducers/ClubInfo";

export const store = createStore(combineReducers({
    sc_user_info: userAuth,
    gp_user_group_list: userGroupList,
    show_club_info: toggleSideNav
}), compose(applyMiddleware(thunkMiddleware)));