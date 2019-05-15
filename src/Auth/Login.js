import React, {Component} from 'react';
import {Auth} from 'aws-amplify';

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

    onSubmit = () => {

    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeUserEmailId}/>
                <input type="password" onChange={this.changeUserPassword}/>
                <button onClick={() => this.onSubmit}> Login</button>
            </div>
        );
    }
}

export default Login;