import React, {Component} from 'react';
import cookie from 'react-cookies';
import history from '../history';
import {connect} from 'react-redux';
import {groupCreation, userGroupList, addNewGroupInLocalStore} from '../Actions/Home';
import {reStoreUserInfoInReduxState} from '../Actions/Auth';
import {getUserInformation} from '../Actions/Auth';

const PostUploader = React.lazy(() => import('./PostUploader'));

class Home extends Component {

	state = {
		group_name: "",
		group_user_id: "",
		group_members: []
	};

	componentDidMount() {
		import('../Generics/Common').then(obj => {
			if (obj.checkCookieStatus()) {
				history.push('/');
			} else if (obj.checkLocalStorageStatus()) {
				history.push('/');
			} else if (this.props.user_info === null || this.props.user_info === undefined || this.props.user_info.user_id === undefined || this.props.user_info.user_id) {
				let user_info = JSON.parse(localStorage.getItem('user_info'));
				this.props.reStoreUserInfoInReduxState(user_info);
				let local_group_list = JSON.parse(localStorage.getItem('_u_g_ls'));
				if (local_group_list === null || local_group_list === undefined) {
					import('../Generics/Common').then(obj => {
						let user_group_list = this.props.user_info.groups;
						let u_group_list = obj.generateJSONObject(user_group_list);
						let groups = {
							"groups": u_group_list
						};
						this.props.userGroupList(groups);
					});
				}
			} else {
				let u_id = cookie.load('_u_id_');
				let local_group_list = JSON.parse(localStorage.getItem('_u_g_ls'));
				if (local_group_list === null || local_group_list === undefined) {
					import('../Generics/Common').then(obj => {
						let user_group_list = this.props.user_info.groups;
						let u_group_list = obj.generateJSONObject(user_group_list);
						let groups = {
							"groups": u_group_list
						};
						this.props.userGroupList(groups);
					});
				}
				this.props.getUserInformation(u_id);
			}
		});
	}

	groupName = (e) => {
		this.setState({
			group_name: e.target.value
		});
	};

	searchUser = (e) => {
		let user = e.target.value;
		this.setState({
			group_user_id: user
		});
	};

	addUsers = async () => {
		import('../APICalls/HomeAPI').then(obj => {
			// group_user_id -> email_id
			obj.searchUserInformation(this.state.group_user_id).then(response => {
				console.log('response in local ', response);
				if (response) {
					if (response.data.status === true) {
						// user exist and can add into the group user list.
						// let e_key = response.data.e_key,
						// 	k_val = response.data.k_val;
						// import('../Generics/Common').then(c_obj => {
						// 	let u_id = c_obj.decrypt(e_key, k_val);
						// 	console.log('decrypted u id', u_id);
						// })
						let user_group_list = this.state.group_members;
						user_group_list.push(response.data);
						this.setState({
							group_members: user_group_list
						});
					} else {
						console.log('User not found');
						// showing alert sorry user not found.
					}
				} else {
					console.log('error');
				}
			});
		});
	};


	createGroup = () => {
		if (this.props.user_info === null || this.props.user_info === undefined) {
			console.log('create group user info ', this.props.user_info);
		} else {
			let uuid = require('uuid');
			let group_id = uuid();
			this.props.user_info.groups.push(group_id);
			let user_groups = this.props.user_info.groups;
			let groupInfo = {
				group_id: group_id,
				group_name: this.state.group_name,
				group_members: this.state.group_members,
				bucket_location: `group-memory-${this.props.user_info.country}/ + ${group_id + "-" + this.props.user_info.state + "-" + this.props.user_info.city + "-" + this.state.group_name}`
			};
			let userInfo = {
				admin_user_id: this.props.user_info.user_id,
				user_groups: user_groups,
				state: this.props.user_info.state,
				district: this.props.user_info.district
			};
			this.props.groupCreation(userInfo, groupInfo);
			let newGroupInfo = {
				group_id: group_id,
				group_name: this.state.group_name,
				group_members: this.state.group_members,
				admin_user_id: this.props.user_info.user_id
			};
			this.props.addNewGroupInLocalStore(newGroupInfo);
		}
	};

	render() {
		if (this.props.user_info === null || this.props.user_info.user_id === undefined) {
			return <div> Loading </div>
		} else {
			return (
				<div>
					<input type="text" onChange={this.groupName}/>
					<input type="text" onChange={this.searchUser}/>
					<button onClick={this.addUsers}> add</button>
					<button onClick={this.createGroup}> Create</button>
					<PostUploader user_info={this.props.user_info}/>
				</div>
			);
		}
	}
}


const mapStateToProps = (state) => {
	return {
		user_info: state.sc_user_info.sc_user_info,
		user_group_list: state.gp_group_user_list
	}
};

export default connect(mapStateToProps, {
	getUserInformation,
	groupCreation,
	userGroupList,
	reStoreUserInfoInReduxState,
	addNewGroupInLocalStore
})(Home);