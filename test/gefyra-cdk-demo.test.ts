import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as GefyraCdkDemo from '../lib/gefyra-cdk-demo-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new GefyraCdkDemo.GefyraCdkDemoStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);

    // Testing AWS individual resources within the stack
//   template.hasResourceProperties('AWS::SQS::Queue', {
//     VisibilityTimeout: 300
//   });

});
