import React, {Component} from 'react';
import AWS from 'aws-sdk';
import VideoThumbnail from 'react-video-thumbnail';
import cookie from 'react-cookies';
import imageCompression from 'browser-image-compression';

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
		files: [],
		sources: [],
		video_thumbnail: ""
	};

	selectItem = (e) => {
		this.setState({
			files: e.target.files
		}, () => {
			let sources = [];
			console.log('files ', this.state.files);
			let file = this.state.files[0];
			sources.push({src: URL.createObjectURL(file), type: file.type});
			this.setState({
				sources: sources
			});
		});
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

	videoPostUpload = (key, user_id, file, thumbnail) => {
		let _this = this;
		let videoKey = key + "_" + user_id + ".mp4";
		let thumbnailKey = key + "_" + user_id + ".jpeg";
		let upload = new AWS.S3.ManagedUpload({
			partSize: 5 * 1024 * 1024,
			queueSize: 2,
			params: {
				Bucket: 'group-memory-india/tamilnadu-coimbatore-abde/videos',
				Key: videoKey,
				ACL: 'public-read',
				ContentType: file.type,
				Body: file
			}
		});
		let promise = upload.promise();
		promise.then(function (data) {
			console.log("success ", data);
			let s3Bucket = new AWS.S3({
				params: {
					Bucket: 'group-memory-india/tamilnadu-coimbatore-abde/thumbnail-images'
				}
			});
			let buf = new Buffer(thumbnail.replace(/^data:image\/\w+;base64,/, ""), 'base64');
			let thumbData = {
				Key: thumbnailKey,
				Body: buf,
				ACL: 'public-read',
				ContentEncoding: 'base64',
				ContentType: 'image/jpeg'
			};
			s3Bucket.putObject(thumbData, function (err, data) {
				if (err) {
					console.log(err);
					console.log('Error uploading data: ', err);
				} else {
					console.log('successfully uploaded the image!', data);

					/* Update redux store when the video is uploaded successfully in S3 bucket. So we are triggering a redux action with 100%  percentage
						and "uploaded" status */

				}
			});
		}, function (err) {
			console.log("error ", err);
		});

		/*
			Video will be uploaded when the user is not canceling the video upload.
		 */

		upload.on('httpUploadProgress', function (progress) {
			let percentage = Math.round(progress.loaded / progress.total * 100);
			_this.setState({
				uploadPercentage: percentage
			});
		});
	};

	convertBlobToBase64 = async (blob) => {
		const imageFile = blob;
		let options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 460,
			useWebWorker: true
		};
		try {
			let base64data = null;
			const compressedFile = await imageCompression(imageFile, options);
			let reader = new FileReader();
			let _this = this;
			reader.readAsDataURL(compressedFile);
			reader.onloadend = function () {
				base64data = reader.result;
				_this.setState({
					video_thumbnail: base64data
				});
				console.log('base64 ', base64data);
			};
		} catch (error) {
			console.log(error);
		}
	};

	imageCompression = (base64) => {
		let url = base64,
			_this = this;
		fetch(url)
			.then(res => res.blob())
			.then(blob => {
				_this.convertBlobToBase64(blob);
			});
	};

	thumbnailGeneration = (thumbnail) => {
		console.log('thumbnail ', thumbnail);
		this.setState({
			video_thumbnail: thumbnail
		}, () => {
			this.imageCompression(thumbnail);
		})
	};

	uploadItems = () => {
		if (this.state.files.length > 0) {
			let u_key = "";
			import('../Generics/Common').then(obj => {
				u_key = obj.generateRandomKeyValue();
			});
			let u_id = this.props.user_info.user_id;
			let file = this.state.files[0];
			file.type.includes("image") ? this.imagePostUpload(u_key, u_id, file) : this.videoPostUpload(u_key, u_id, file, this.state.video_thumbnail);
			// this.imagePostUpload(u_key, u_id, file);
		}
	};


	render() {
		return (
			<div>
				<input type="file" onChange={this.selectItem}/>
				<div style={{ display: 'none' }}>{this.state.sources.length > 0 ?
					<VideoThumbnail
						videoUrl={this.state.sources[0].src}
						renderThumbnail={false}
						snapshotAtTime={2}
						thumbnailHandler={(thumbnail) => this.thumbnailGeneration(thumbnail)}
						width={460}
						height={340}
					/> : null
				}
				</div>
				<button onClick={this.uploadItems}> upload</button>
			</div>
		);
	}
}

export default PostUploader;