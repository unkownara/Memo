import React, {Component} from 'react';
import AWS from 'aws-sdk';
import cookie from 'react-cookies';

const FileInput = React.lazy(() => import("../GenericComponents/FileInput"));

AWS.config.update({
	region: 'us-east-2',
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
		Logins: {
			'cognito-idp.us-east-2.amazonaws.com/us-east-2_V4Riy4Izt': cookie.load('_ref_i_token_')
		}
	})
});

AWS.Config.httpOptions = {
	timeout: 0
};


class AdminPage extends Component {

	getInputFile = (input_file) => {
		console.log('input file ', input_file);
		import('../S3/TextFilesUpload').then(obj => {
			obj.textFileUplaod(input_file[0], "FirstSpeak", "12344", "coimbatore");
		})
	};

	render() {
		console.log('Identity pool ', process.env.REACT_APP_IDENTITY_POOL_ID);
		return (
			<div>
				<FileInput getInputFile={this.getInputFile}/>
			</div>
		);
	}
}

export default AdminPage;