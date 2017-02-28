require('dotenv').config({silent: true});

const s3 = require("s3");

const client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: process.env.DEPLOY_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.DEPLOY_AWS_SECRET_ACCESS_KEY,
    region: process.env.DEPLOY_AWS_REGION
  }
});

const params = {
  localDir: __dirname + "/src",
  deleteRemoved: false,
  s3Params: {
    Bucket: process.env.S3_BUCKET,
    Expires : new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  }
};

var uploader = client.uploadDir(params);
uploader.on('error', function (err) {
  console.error("unable to sync:", err.stack);
});
uploader.on('progress', function () {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});
uploader.on('end', function () {
  console.log("done uploading");
});