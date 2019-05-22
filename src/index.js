import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import AWSCredentials from './AWSCredentials';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AuthLogin from './Authentication/login';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: AWSCredentials.cognito.REGION,
        userPoolId: AWSCredentials.cognito.USER_POOL_ID,
        userPoolWebClientId: AWSCredentials.cognito.APP_CLIENT_ID
    },
    Analytics: {
        disabled: true
    }
});

ReactDOM.render(<AuthLogin />, document.getElementById('root'));

serviceWorker.unregister();
