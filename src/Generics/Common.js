import cookie from 'react-cookies';

/* Check if the user is logged in or not. */
export function checkCookieStatus() {
    let u_id = cookie.load('_u_id_');
    return u_id === null || u_id === undefined;
}

export function checkLocalStorageStatus() {
    let user_info = JSON.parse(localStorage.getItem('user_info'));
    return user_info === undefined && user_info === null;
}

/* Generate custom format for getting user groups details.
 */
export function generateJSONObject(groups) {
    let group_list = [];
    for(let i=0;i<groups.length;i++) {
        let obj = {
            "group_id" : {
                "S" : groups[i]
            }
        };
        group_list.push(obj);
    }
    return group_list;
}