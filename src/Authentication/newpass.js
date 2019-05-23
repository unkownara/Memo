import React from 'react';
import LoginPage from './loginpage.js';
import { Icon } from 'semantic-ui-react';

class NewPassword extends React.Component {

    // Set The State Values

    state = {
        newPassValue: '',
        confirmPassValue: '',
        changeLogin: true,
        iconSelect: true,
        iconChange: true,
        OTPValue: [
            {
                firstValue: '',
                secondValue: '',
                thirdValue: '',
                fourthValue: '',
                fifthValue: '',
                sixthValue: '',
            }
        ],
        warning: false,
        OTPChange: false
    }

    // Get The New Password

    getNewPassword = (e) => {
        this.setState({
            newPassValue: e.target.value,
            warning: false
        })
    }

    // Get The Confirm Password

    getConfirmPassword = (e) => {

        if (this.state.newPassValue === '') {
            this.setState({
                warning: true
            })
            this.email.focus();
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
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.secondOtpInput.focus();
                    break;
                case 'secondOtpInput':
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.thirdOtpInput.focus();
                    break;
                case 'thirdOtpInput':
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.fourOtpInput.focus();
                    break;
                case 'fourOtpInput':
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.fifthOtpInput.focus();
                    break;
                case 'fifthOtpInput':
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.sixOtpInput.focus();
                    break;
                case 'sixOtpInput':
                    this.setState({
                        firstValue: e.target.value
                    })
                    this.sixOtpInput.focus();
                    break;
                default:
                    this.firstOtpInput.focus();
            }
        }
    }

    // change To Login Page

    login = () => {
        this.setState({
            changeLogin: false
        })
    }

    // Form Submission

    submit = () => {

    }

    render() {
        return (

            // New And Confirm Password Form Creation

            <React.Fragment>
                {this.state.changeLogin ?
                    (<div className="newPassword">

                        {/* Heading And subHeading  */}

                        <div className="newPassParagraph">
                            <p className="heading">Set NewPassword</p>
                            <p className="subHeading">Your password must contain atleast 8 characters, 1 uppercase letter, and 1 digit.</p>
                        </div>

                        {/* New Password Input Box */}
                        <form onSubmit={this.submit}>
                            <div className="newPassInputBoxDiv">
                                <input type="text"
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
                                            top: '47px'
                                        }} /> :
                                    null}
                            </div>

                            {/* Confirm Password Input Box */}

                            <div style={{ position: 'relative' }}>
                                <input type="password"
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
                                            top: '45px',
                                            zIndex: '999'
                                        }} />) :
                                    (<Icon name='check circle outline'
                                        color="green"
                                        style={{
                                            position: 'absolute',
                                            right: '0px',
                                            top: '45px',
                                            zIndex: '999'
                                        }} />)
                                )}
                            </div>

                            {/* One Time Password Creation  */}

                            {this.state.OTPChange === true ?
                                (
                                    <div className="OTPmain"><p className="paraOTP">Enter OTP</p>
                                        <div className="OTP">
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.firstOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'firstOtpInput')} />
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.secondOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'secondOtpInput')} />
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.thirdOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'thirdOtpInput')} />
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.fourOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'fourOtpInput')} />
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.fifthOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'fifthOtpInput')} />
                                            <input type="text"
                                                maxLength="1"
                                                className="PasswordOTPInputBox"
                                                ref={(input) => { this.sixOtpInput = input }}
                                                onKeyUp={this.onKey.bind(this, 'sixOtpInput')} />
                                        </div>
                                    </div>
                                ) : null}

                            {/* Form submit button And Paragraph */}

                            <div className="submitButton">
                                <button type="button" className="submit" onClick={this.submit} > Reset Password </button>
                                <p className="para">Remember your password? <span onClick={this.login}>Login</span></p>
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