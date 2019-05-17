export function storeUserSignInResponse(res) {
    return dispatch => {
        dispatch({
            type: "store_user_signIn_response",
            payload: res
        });
    }
}

export function storeUserInformationInLocal(resObj) {
    return dispatch => {
        dispatch({
            type: "store_user_info",
            payload: resObj.status ? resObj : null
        })
    }
}