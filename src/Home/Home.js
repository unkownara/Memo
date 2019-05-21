import React, {Component} from 'react';
const PostUploader = React.lazy(() => import('./PostUploader'));

class Home extends Component {
    render() {
        return (
            <div>
                Welcome!!!
                <PostUploader />
            </div>
        );
    }
}

export default Home;