import cookie from 'react-cookies';
const crypto = require('crypto');

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

/* Generate random key value
*/
export function generateRandomKeyValue() {
	let uuid = require('uuid');
	return uuid();
}


/* Decrypt user id from response */
export function decrypt(text, key) {
    console.log('decryption ', text.iv, text.e_d_v, key);
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.e_d_v, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key.data), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}