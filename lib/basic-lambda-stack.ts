import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class basicLambdaStack extends cdk.Stack{
  // Making the object accessible for reuseability
  public readonly lambdaFunction: lambda.Function;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const function_name = 'gefyra-basic-lambda';
    const lambda_path = 'src/lambda/basic_lambda';

    // Initialization of the lambda function
    this.lambdaFunction = new lambda.Function(this, function_name, {
        functionName: function_name,
        runtime: lambda.Runtime.PYTHON_3_8,
        code: lambda.Code.fromAsset(lambda_path),
        handler: "lambda_function.lambda_handler"
    });
  }
}