import React from 'react';

const Login = React.lazy(() => import('./Auth/Login'));

function App() {
    return (
        <div>
            Welcome boys and girls.
            <Login />
        </div>
    );
}
export default App;