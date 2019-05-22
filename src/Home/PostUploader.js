import React, {Component} from 'react';
import AWS from 'aws-sdk';
import cookie from 'react-cookies';

AWS.config.update({
	region: 'us-east-2',
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-2:114e90ce-6087-4de6-a130-5445f6a97e1b',
		Logins: {
			'cognito-idp.us-east-2.amazonaws.com/us-east-2_V4Riy4Izt': cookie.load('_ref_i_token_')
		}
	})
});

AWS.Config.httpOptions = {
	timeout: 0
};

class PostUploader extends Component {

	state = {
		file: []
	};

	selectItem = (e) => {
		this.setState({
			file: e.target.files
		});
		console.log('file ', e.target.files);
	};

	imagePostUpload = (key, user_id, file) => {
		let _this = this;
		key = key + "_" + user_id + ".jpeg";
		let upload = new AWS.S3.ManagedUpload({
			partSize: 5 * 1024 * 1024,
			queueSize: 1,
			params: {
				Bucket: 'group-memory-india/tamilnadu-coimbatore-abde', // state-district-group_name
				Key: key,
				ACL: 'public-read',
				ContentType: file.type,
				Body: file
			}
		});
		let promise = upload.promise();
		promise.then(function (data) {
			console.log("success ", data);
		});
		/*
			Video will be uploaded when the user is not canceling the video upload.
		 */

		upload.on('httpUploadProgress', function (progress) {
			let percentage = Math.round(progress.loaded / progress.total * 100);
			_this.setState({
				uploadPercentage: percentage
			});
			console.log('percentage ', percentage);
			// _this.props.updateS3UploadingStatus(percentage, _this.props.type);
		});
	};

	videoPostUpload = () => {
		// let _this = this;
		// let u_key = "";
		// import('../Generics/Common').then(obj => {
		// 	u_key = obj.generateRandomKeyValue();
		// });
		//
		// let upload = new AWS.S3.ManagedUpload({
		// 	partSize: 5 * 1024 * 1024,
		// 	queueSize: 1,
		// 	params: {
		// 		Bucket: 'spoken-english-institutes/spoken_english_institutes_videos',
		// 		Key: videoKey,
		// 		ACL: 'public-read',
		// 		ContentType: this.props.videoFile.type,
		// 		Body: this.props.videoSelectedType === 'recorder' ? new File([this.props.videoFile], "abc.mp4") : this.props.videoFile
		// 	}
		// });
		// let promise = upload.promise();
		// promise.then(function (data) {
		// 	console.log("success ", data);
		// 	let s3Bucket = new AWS.S3({
		// 		params: {
		// 			Bucket: 'spoken-english-institutes/spoken_english_institutes_thumbnail_images'
		// 		}
		// 	});
		// 	let buf = new Buffer(thumbnailBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
		// 	let thumbData = {
		// 		Key: thumbnailImgKey,
		// 		Body: buf,
		// 		ACL: 'public-read',
		// 		ContentEncoding: 'base64',
		// 		ContentType: 'image/jpeg'
		// 	};
		// 	s3Bucket.putObject(thumbData, function (err, data) {
		// 		if (err) {
		// 			console.log(err);
		// 			console.log('Error uploading data: ', err);
		// 		} else {
		// 			console.log('successfully uploaded the image!', data);
		// 			_this.props.uploadedVideoDetails(_this.props.videoInfo);
		// 			/* Update redux store when the video is uploaded successfully in S3 bucket. So we are triggering a redux action with 100%  percentage
		// 				and "uploaded" status */
		// 			_this.props.storeUploadedVideoStatus(_this.props.type);
		// 			_this.props.uploadTopicPopularity(_this.props.videoInfo.videoTopicId);
		// 		}
		// 	});
		// }, function (err) {
		// 	console.log("error ", err);
		// });
		//
		// /*
		// 	Video will be uploaded when the user is not canceling the video upload.
		//  */
		//
		// upload.on('httpUploadProgress', function (progress) {
		// 	let percentage = Math.round(progress.loaded / progress.total * 100);
		// 	_this.setState({
		// 		uploadPercentage: percentage
		// 	});
		// 	_this.props.updateS3UploadingStatus(percentage, _this.props.type);
		// });
	};

	uploadItems = () => {
		let u_key = "";
		import('../Generics/Common').then(obj => {
			u_key = obj.generateRandomKeyValue();
		});
		let u_id = this.props.user_info.user_id;
		let file = this.state.file[0];
		this.imagePostUpload(u_key, u_id, file);
	};

	render() {
		return (
			<div>
				<input type="file" onChange={this.selectItem}/>
				<button onClick={this.uploadItems}> upload</button>
			</div>
		);
	}
}

export default PostUploader;