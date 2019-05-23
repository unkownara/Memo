import React from 'react';
import '../Generics/Common.css';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './Auth.js';

class Login extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className="login">
                    <section className="image"></section> 
                    <LoginPage />
                </div> 
            </React.Fragment>
        )
    }
}




export default Login;

