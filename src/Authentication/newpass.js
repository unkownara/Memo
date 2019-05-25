import React from 'react';
import LoginPage from './loginpage.js';
import { Icon } from 'semantic-ui-react';
import { LargeInput, H2, MediumPrimaryButton, P5, H6 } from '../Generics/Styles';

class NewPassword extends React.Component {

    // Set The State Values

    state = {
        newPassValue: '',
        confirmPassValue: '',
        changeLogin: true,
        iconSelect: true,
        iconChange: true,
        OTPArray: [],
        OTPvalue: {
            firstValue: '',
            secondValue: '',
            thirdValue: '',
            fourthValue: '',
            fifthValue: '',
            sixthValue: ''
        },
        warning: false,
        OTPChange: false
    }

    // Get The New Password

    getNewPassword = (e) => {
        this.setState({
            newPassValue: e.target.value,
            warning: false
        }, () => {
            if ((this.state.confirmPassValue.length !== 0) && (this.state.newPassValue !== this.state.confirmPassValue)) {
                this.setState({
                    iconSelect: false,
                    iconChange: true,
                    OTPChange: false
                })
            }
            else if ((this.state.confirmPassValue.length !== 0) && this.state.newPassValue === this.state.confirmPassValue) {
                this.setState({
                    iconSelect: false,
                    iconChange: false,
                    OTPChange: true
                })
            }
        })
    }

    // Get The Confirm Password

    getConfirmPassword = (e) => {

        if (this.state.newPassValue === '') {
            this.setState({
                warning: true
            })
            this.email.focus();
            alert(this.state.newPassValue)
        }
        else {
            this.setState({
                confirmPassValue: e.target.value
            }, () => {
                if ((this.state.newPassValue.length !== 0) && (this.state.newPassValue === this.state.confirmPassValue))
                    this.setState({
                        iconSelect: false,
                        iconChange: false,
                        OTPChange: true
                    })

                else if ((this.state.newPassValue.length !== 0)) {
                    this.setState({
                        iconSelect: false,
                        iconChange: true,
                        OTPChange: false
                    })
                }
                if (this.state.confirmPassValue.length === 0)
                    this.setState({
                        iconSelect: true,
                        OTPChange: false
                    })
            })
        }
    }

    // One Time Password Validation

    onKey = (target, e) => {
        if (e.keyCode === 8) {
            switch (target) {
                case 'firstOtpInput':
                    this.firstOtpInput.focus();
                    break;
                case 'secondOtpInput':

                    this.firstOtpInput.focus();
                    break;
                case 'thirdOtpInput':

                    this.secondOtpInput.focus();
                    break;
                case 'fourOtpInput':

                    this.thirdOtpInput.focus();
                    break;
                case 'fifthOtpInput':

                    this.fourOtpInput.focus();
                    break;
                case 'sixOtpInput':

                    this.fifthOtpInput.focus();
                    break;
                default:
                    this.firstOtpInput.focus();
            }
        }
        else {
            switch (target) {
                case 'firstOtpInput':
                    let first = this.state.OTPvalue;
                    first.firstValue = e.target.value
                    this.setState({
                        OTPvalue: first
                    }, () => {
                        this.secondOtpInput.focus();
                    })
                    break;
                case 'secondOtpInput':
                    let second = this.state.OTPvalue;
                    second.secondValue = e.target.value;
                    this.setState({
                        OTPvalue: second
                    }, () => {
                        this.thirdOtpInput.focus();
                    })
                    break;
                case 'thirdOtpInput':
                    let third = this.state.OTPvalue;
                    third.thirdValue = e.target.value
                    this.setState({
                        OTPvalue: third
                    }, () => {
                        this.fourOtpInput.focus();
                    })
                    break;
                case 'fourOtpInput':
                    let fourth = this.state.OTPvalue;
                    fourth.fourthValue = e.target.value
                    this.setState({
                        OTPvalue: fourth
                    }, () => {
                        this.fifthOtpInput.focus();
                    })
                    break;
                case 'fifthOtpInput':
                    let fifth = this.state.OTPvalue;
                    fifth.fifthValue = e.target.value
                    this.setState({
                        OTPvalue: fifth
                    }, () => {
                        this.sixOtpInput.focus();
                    })
                    break;
                case 'sixOtpInput':
                    let six = this.state.OTPvalue;
                    six.sixthValue = e.target.value
                    this.setState({
                        OTPvalue: six
                    }, () => {
                        this.sixOtpInput.focus();
                    })
                    break;
                default:
                    this.firstOtpInput.focus();
            }
        }
    }

    // change To Login Page

    register = () => {
        this.setState({
            changeLogin: false
        })
    }

    validateForm(e) {
        let newPassValue = this.state.newPassValue;
        let formIsValid = true;

        if (!newPassValue) {
            formIsValid = false;
        }

        if (typeof newPassValue !== "undefined") {
            if (!newPassValue.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                alert(formIsValid)
            }
        }
        return formIsValid;
    }

    // Form Submission

    submit = (e) => {

        let array = this.state.OTPArray;
        let obj = this.state.OTPvalue;
        array.push(obj);

        this.setState({
            OTPArray : array
        })

        e.preventDefault();
        if (this.validateForm()) {
            let fields = "";
            this.setState({
                newPassValue: fields,
                confirmPassValue: fields,
                OTPChange: false,
                iconSelect: true
            });
        }
    }

    render() {
        return (

            // New And Confirm Password Form Creation

            <React.Fragment>
                {this.state.changeLogin ?
                    (<div className="newPassword">

                        {/* Heading And subHeading  */}

                        <div className="newPassParagraph">
                            <H2 className="heading">Set NewPassword</H2>
                            <P5 className="subHeading">Your password must contain atleast 8 characters, 1 uppercase letter, and 1 digit.</P5>
                        </div>

                        {/* New Password Input Box */}
                        <form onSubmit={this.submit}>
                            <div className="newPassInputBoxDiv">
                                <LargeInput type="text"
                                    placeholder="New Password"
                                    className="email"
                                    ref={(input) => { this.email = input }}
                                    value={this.state.newPassValue}
                                    onChange={this.getNewPassword}
                                />
                                {this.state.warning ?
                                    <Icon name='warning'
                                        color="red"
                                        style={{
                                            position: 'absolute',
                                            right: '0',
                                            top: '35px'
                                        }} /> :
                                    null}
                            </div>

                            {/* Confirm Password Input Box */}

                            <div style={{ position: 'relative' }}>
                                <LargeInput type="password"
                                    placeholder="Confirm New Password"
                                    className="password"
                                    value={this.state.confirmPassValue}
                                    onChange={this.getConfirmPassword}
                                />
                                {this.state.iconSelect ? null : (this.state.iconChange ?
                                    (<Icon loading
                                        name='spinner'
                                        style={{
                                            position: 'absolute',
                                            right: '0px',
                                            top: '35px',
                                            zIndex: '999'
                                        }} />) :
                                    (<Icon name='check circle outline'
                                        color="green"
                                        style={{
                                            position: 'absolute',
                                            right: '0px',
                                            top: '35px',
                                            zIndex: '999'
                                        }} />)
                                )}
                            </div>

                            {/* One Time Password Creation  */}

                            {this.state.OTPChange === true ?
                                (
                                    <div className="OTPmain"><p className="paraOTP">Enter OTP</p>
                                        <div className="OTP">
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.firstValue}
                                                ref={(input) => { this.firstOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'firstOtpInput')} />
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.secondValue}
                                                ref={(input) => { this.secondOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'secondOtpInput')} />
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.thirdValue}
                                                ref={(input) => { this.thirdOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'thirdOtpInput')} />
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.fourthValue}
                                                ref={(input) => { this.fourOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'fourOtpInput')} />
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.fifthValue}
                                                ref={(input) => { this.fifthOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'fifthOtpInput')} />
                                            <LargeInput type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                value={this.state.OTPArray.sixthValue}
                                                ref={(input) => { this.sixOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'sixOtpInput')} />
                                        </div>
                                    </div>
                                ) : null}

                            {/* Form submit button And Paragraph */}

                            <div className="submitButton">
                                <MediumPrimaryButton type="button"
                                    height="50px"
                                    width="200px"
                                    className="submit"
                                    onClick={this.submit} >
                                    Reset Password
                                </MediumPrimaryButton>
                            </div>
                            <div className="Paragraph">
                                <P5 className="para">
                                    Remember your password?
                                </P5>
                                <H6 className="h6" onClick={this.register}>
                                    Login
                                </H6>
                            </div>
                        </form>
                    </div>) :

                    // Change The File Page

                    (
                        <LoginPage />
                    )}
            </React.Fragment>
        )
    }
}

export default NewPassword;