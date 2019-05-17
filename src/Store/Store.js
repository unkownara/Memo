import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {userAuth} from "../Reducers/Auth";

export const store = createStore(combineReducers({
    sc_user_info: userAuth
}), compose(applyMiddleware(thunkMiddleware)));