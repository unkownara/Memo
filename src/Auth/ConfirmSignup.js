import React from 'react';

class ConfirmSignup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            otp_value_1: "",
            otp_value_2: "",
            otp_value_3: "",
            otp_value_4: "",
            otp_value_5: "",
            otp_value_6: ""
        };
    }

    getOtp = (e) => {
        this.setState({
            otp_value_1: e.target.value
        }, function () {
            this.props.getOtpValue(this.state.otp_value_1);
        })
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.getOtp}/>
            </div>
        );
    }
}

export default ConfirmSignup;