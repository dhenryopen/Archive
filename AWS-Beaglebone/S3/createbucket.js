// createbucket.js

var AWS = require('aws-sdk'); 
var s3 = new AWS.S3(); 

 s3.createBucket({Bucket: 'dshenryawsbucket2'}, function() {
  AWS.config.region = 'us-west-2';
  
 var params = {Bucket: 'dshenryawsbucket2', Key: 'myKey', Body: 'Hello!'};
 s3.putObject(params, function(err, data) {
      if (err)
          console.log(err);
      else       console.log("Successfully uploaded data to dshenryawsbucket2/myKey");   
   });
});
