#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GefyraCdkDemoStack } from '../lib/gefyra-cdk-demo-stack';

const app = new cdk.App();
new GefyraCdkDemoStack(app, 'GefyraCdkDemoStack');
