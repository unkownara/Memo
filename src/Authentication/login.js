import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import LoginPage from './loginpage';
import '../Generics/Common.css';
import 'semantic-ui-css/semantic.min.css';

class AuthLogin extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="login">
                    <section className="image"></section>
                    <LoginPage />
                </div>
            </React.Fragment>
        )
    }
}

export default AuthLogin; 