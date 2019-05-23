import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import ClubCards from './ClubCards/ClubCards';

const Login = React.lazy(() => import('./Auth/Login'));
const Signup = React.lazy(() => import('./Auth/Signup'));
const Home = React.lazy(() => import('./Home/Home'));
const AuthLogin = React.lazy(() => import('./Authentication/login'));
const ForgotPassword = React.lazy(() => import('./Auth/ForgotPassword'));

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
                        <Route
                            path="/forgot"
                            component={ForgotPassword}
                        />
                        <Route
                            exact
                            path="/home"
                            component={Home}
                        />
                        <Route
                            exact
                            path="/clubs"
                            component={ClubCards}
                        />
                    </Switch>
                </Router>
            </React.Suspense>
        </div>
    );
}

export default App;