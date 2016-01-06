
// getobjects.js

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
AWS.config.region = 'us-west-2';

var params = {Bucket: 'dshenryawsbucket2', Key: 'myKey'};
var s3file = s3.getObject(params);

s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data.Body.toString('ascii')); // successful response

});
