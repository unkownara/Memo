import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';

const Login = React.lazy(() => import('./Auth/Login'));
const Signup = React.lazy(() => import('./Auth/Signup'));

function App() {
    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Router history={history}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Login}
                        />
                        <Route
                            path="/signup"
                            component={Signup}
                        />
                    </Switch>
                </Router>
            </React.Suspense>
        </div>
    );
}

export default App;