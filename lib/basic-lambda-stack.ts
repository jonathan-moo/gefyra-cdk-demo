import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class basicLambdaStack extends cdk.Stack{
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const function_name = 'gefyra-basic-lambda';
    const lambda_path = 'src/lambda/basic_lambda';

    const handler = new lambda.Function(this, function_name, {
        functionName: function_name,
        runtime: lambda.Runtime.PYTHON_3_8,
        code: lambda.Code.fromAsset(lambda_path),
        handler: "lambda_function.lambda_handler"
    });
  }
}