export function toggleSideNav(value) {
    return dispatch => {
        dispatch({
            type: "toggle_club_info",
            payload: value
        });
    }
}
