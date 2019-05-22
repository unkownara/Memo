import React, {Component} from 'react';
import {Auth} from 'aws-amplify';
import {connect} from 'react-redux';
import cookie from 'react-cookies';
import history from '../history';
import {getUserInformation} from '../Actions/Auth';
import { SmallPrimaryButton } from '../Generics/Styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email_id: "",
            password: ""
        };
    }

    changeUserEmailId = (e) => {
        this.setState({
            email_id: e.target.value
        })
    };

    changeUserPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    signIn = () => {
        Auth.signIn(this.state.email_id, this.state.password)
            .then(user => {
                let cog_data = user.signInUserSession.idToken;
                let u_id = cog_data.payload.sub,
                    jwt_token = cog_data.jwtToken;

                localStorage.setItem('_cog_u_in_', JSON.stringify(cog_data.payload));
                cookie.save("_ref_i_token_", jwt_token, {path: '/'});
                cookie.save("_u_id_", u_id, {path: '/'});

                this.props.getUserInformation(u_id);
            }).catch(err => {
            console.log('Oops something error ', err);
        })
    };

    redirect = () => {
        history.push('/forgot');
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeUserEmailId}/>
                <input type="password" onChange={this.changeUserPassword}/>
                <p onClick={this.redirect}> Forgot password? </p>
                <SmallPrimaryButton onClick={this.signIn}> Login</SmallPrimaryButton>
            </div>
        );
    }
}

export default connect(null, {getUserInformation})(Login);