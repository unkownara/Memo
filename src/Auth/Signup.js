import React, {Component} from 'react';
import {Auth} from 'aws-amplify';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email_id: "",
            password: "",
            phone_number: "",
            gender: "",
            city: ""
        };
    }

    getUserName = (e) => {
        this.setState({
            user_name: e.target.value
        });
    };

    getUserEmailId = (e) => {
        this.setState({
            email_id: e.target.value
        });
    };

    getUserPassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    getUserPhoneNumber = (e) => {
        this.setState({
            phone_number: "+91" + e.target.value
        });
    };

    getUserGender = (e) => {
        this.setState({
            gender: e.target.value
        });
    };

    getUserCity = (e) => {
        this.setState({
            city: e.target.value
        });
    };

    initiateSignup = () => {
        console.log('inside');
        Auth.signUp({
            username: this.state.email_id,
            password: this.state.password,
            'attributes': {
                name: this.state.user_name,
                email: this.state.email_id,
                phone_number: this.state.phone_number,
                gender: this.state.gender,
                birthdate: "",
                'custom:city': this.state.city,
            }
        }).then(res => {
            console.log('Success response ', res);
            let user_info = {
                u_id: res.userSub,
                user_name: this.state.user_name,
                email_id: this.state.email_id,
                phone_number: this.state.phone_number,
                gender: this.state.gender,
                birth_day: " ",
                city: this.state.city
            };
            import('../APICalls/AuthAPI').then(obj => {
                console.log('store user information in dynamo db');
                obj.storeUserInformation(user_info);
            })
        }).catch(err => {
            console.log('Failure response ', err);
        });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.getUserName}/>
                <input type="text" onChange={this.getUserEmailId}/>
                <input type="text" onChange={this.getUserPassword}/>
                <input type="number" onChange={this.getUserPhoneNumber}/>
                <input type="text" onChange={this.getUserGender}/>
                <input type="text" onChange={this.getUserCity}/>
                <button onClick={this.initiateSignup}> Signup</button>
            </div>
        );
    }
}

export default Signup;