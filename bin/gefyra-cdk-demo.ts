#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
//import { GefyraCdkDemoStack } from '../lib/gefyra-cdk-demo-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';
import { basicLambdaStack } from '../lib/basic-lambda-stack';

const app = new cdk.App();
//new GefyraCdkDemoStack(app, 'GefyraCdkDemoStack');

// Deploying basic Lambda function
const basic_lambda_stack = new basicLambdaStack(app, 'basicLambdaStack');

// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'gefyraS3Stack', {
  lambdaFunction: basic_lambda_stack.lambdaFunction
});

// Re-using assets
const bucket = s3_bucket_stack.bucket;
