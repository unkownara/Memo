import React, {Component} from 'react';
import {Auth} from 'aws-amplify';

class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email_id: "",
            new_password: "",
            confirm_password: ""
        };
    }

    userEmailId = (e) => {
        this.setState({
            email_id: e.target.value
        })
    };

    newPassword = (e) => {
        this.setState({
            new_password: e.target.value
        });
    };

    confirmPassword = (e) => {
        this.setState({
            confirm_password: e.target.value
        })
    };

    changePassword = () => {
        Auth.forgotPassword(this.state.email_id)
            .then(data => {
                console.log('verified email id');
                Auth.forgotPasswordSubmit(this.state.email_id, this.state.otp, this.state.confirm_password)
                    .then(data => {
                        this.resetLogin();
                    })
                    .catch(err => {
                        this.setState({otpVerifyFailed: true});
                        console.log('error', err)
                    });
            })
            .catch(err => {
                console.log('invalid email id', err);
            });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.userEmailId}/>
                <input type="text" onChange={this.newPassword}/>
                <input type="text" onChange={this.confirmPassword}/>
                <button onClick={this.changePassword}> Change password</button>
            </div>
        );
    }
}

export default ForgotPassword;