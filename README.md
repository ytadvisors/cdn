Default CDN transfer script
--------------------

#### Script to transfer local files from the src/ director to the S3 bucket 

### Requirements

* [Nodejs](https://nodejs.org)

### Installation

* From the root of the project `npm install`

### Start

* From the root of the project `npm start`

### Deploy

* From the root of the project `npm run deploy`

### ENVIRONMENT VARIABLES

* Make sure the following environment variables are setup before the application runs.  For a local testing, you can create an .env file in the 
 root director with the values included.

```
DEPLOY_AWS_ACCESS_KEY_ID=<update with amazon key>
DEPLOY_AWS_SECRET_ACCESS_KEY=<update with amazon secret key>
DEPLOY_AWS_REGION=<update with amazon region>
CDN_BASE=<update with CloudFront cdn>
S3_BUCKET=<update with S3 bucket name>
```