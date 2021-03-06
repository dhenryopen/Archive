
// listbuckets.js

var AWS = require('aws-sdk'); 

var s3 = new AWS.S3();
AWS.config.region = 'us-west-2';

s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
