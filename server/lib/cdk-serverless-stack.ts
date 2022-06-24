import { Construct } from 'constructs';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigw from '@aws-cdk/aws-apigateway'
import * as dynamodb from "@aws-cdk/aws-dynamodb"
import { lambda_layer_awscli } from 'aws-cdk-lib';
import { Lambda } from 'aws-cdk-lib/aws-ses-actions';

export class CdkServerlessStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  

  //Dynamodb table definition:
  const table = new dynamodb.Table(this, "Users", {
    partitionKey: { name: "username", type: dynamodb.AttributeType.STRING },
  });

  //Lambda definition:
  const dynamoLambda = new lambda.Function(this, "DynamoLambdaHandler", {
    runtime: lambda.Runtime.NODEJS_12_X,
    code: lambda.Code.asset("functions"),
    handler: "function.handler",
    environment: {
      USER_DATA: table.tableName
    }
  })

  // permissions to lambda to dynamo table
  table.grantReadWriteData(dynamoLambda);

  // creates the API Gateway with on emethod and path
  const api = new apigw.RestApi(this, "users-api");

  api.root
  .resourceForPath("users")
  .addMethod("PUT", new apigw.LambdaIntegration(dynamoLambda))
  }
}
