import AWS from 'aws-sdk';

/* Uploading excel/csv files into S3 bucket */
export function textFileUplaod(content, company_name, company_id, city) {
	let uuid = require('uuid');
	let s3_obj_key = uuid() + "_" + company_name + "_" + company_id + "_" + city;
	let upload = new AWS.S3.ManagedUpload({
		partSize: 5 * 1024 * 1024,
		queueSize: 1,
		params: {
			Bucket: 'company-users-details-files',
			Key: s3_obj_key,
			ACL: 'public-read',
			ContentType: 'text/csv',
			Body: content
		}
	});
	let promise = upload.promise();
	promise.then(function (data) {
		console.log("success ", data);
	}, function (err) {
		console.log("error ", err);
	});
	upload.on('httpUploadProgress', function (progress) {
		let percentage = Math.round(progress.loaded / progress.total * 100);
		console.log('uploading percentage ', percentage);
	});
}