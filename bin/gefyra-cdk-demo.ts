#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
//import { GefyraCdkDemoStack } from '../lib/gefyra-cdk-demo-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';

const app = new cdk.App();
//new GefyraCdkDemoStack(app, 'GefyraCdkDemoStack');

// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'gefyraS3Stack');

// Re-using assets
const bucket = s3_bucket_stack.bucket;
