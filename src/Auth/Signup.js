import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import ConfirmSignup from './ConfirmSignup';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email_id: "",
            password: "",
            phone_number: "",
            gender: "",
            city: "",
            otp: "",
            is_otp_sent: false
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
                obj.storeUserInformation(user_info);
                this.setState({
                    is_otp_sent: true
                });
            })
        }).catch(err => {
            console.log('Failure response ', err);
        });
    };

    getOtpValue = (code) => {
        this.setState({
            otp : code
        })
    };

    confirmSignup = () => {
        console.log('verification ', this.state.email_id, this.state.otp);
        Auth.confirmSignUp(this.state.email_id, this.state.otp, {
            forceAliasCreation: true
        }).then(res => {
            console.log("success ", res);
        }).catch(err => console.log(err));
    };


    render() {
        return (
            <React.Fragment>
                {!this.state.is_otp_sent ?
                    <div>
                        <input type="text" onChange={this.getUserName}/>
                        <input type="text" onChange={this.getUserEmailId}/>
                        <input type="text" onChange={this.getUserPassword}/>
                        <input type="number" onChange={this.getUserPhoneNumber}/>
                        <input type="text" onChange={this.getUserGender}/>
                        <input type="text" onChange={this.getUserCity}/>
                        <button onClick={this.initiateSignup}> Signup</button>
                    </div>
                    :
                    <div>
                        <ConfirmSignup getOtpValue={this.getOtpValue}/>
                        <button onClick={this.confirmSignup}> Confirm Signup</button>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Signup;