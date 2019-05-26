export const toggleSideNav = (state, action) => {
    switch (action.type) {
        case 'toggle_club_info':
            state = {
                ...state,
                show_club_info: action.payload
            }
            break;
        default:
            state = {
                ...state,
                show_club_info: false
            }
            break;
    }
    return state;
}