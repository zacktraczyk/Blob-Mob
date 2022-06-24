#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkServerlessStack } from '../lib/cdk-serverless-stack';

const app = new cdk.App();
new CdkServerlessStack(app, 'CdkServerlessStack');
