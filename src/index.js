import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import AWSCredentials from './AWSCredentials';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));
serviceWorker.unregister();


serviceWorker.unregister();
