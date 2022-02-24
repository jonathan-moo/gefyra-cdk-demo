import * as cdk from 'aws-cdk-lib';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

// Allows the stack to receive a lambda.function object
export interface S3Props extends cdk.StackProps{
  readonly lambdaFunction: lambda.Function;
}

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  // Replace the props with our new interface
  constructor(scope: Construct, id: string, props: S3Props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.bucket = new s3.Bucket(this, "gefyra-data-collection-dev",{
      versioned: false,
      bucketName: "gefyra-data-collection-dev",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    // Assigning notifications to be sent to the Lambda function
    this.bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(props.lambdaFunction));
  }
}  
