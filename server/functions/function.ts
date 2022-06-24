import { DynamoDB } from "aws-sdk"

const { USER_DATA } = process.env
exports.handler = async function (event: any) {
  console.log("request:", JSON.stringify(event));
  const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body
  const dynamoClient = new DynamoDB.DocumentClient()
  const results = await dynamoClient.put({ Item: { ...body }, TableName: USER_DATA! }).promise()

  // return response back to upstream caller
  return sendRes(200, JSON.stringify(results));
};

const sendRes = (status: number, body: string) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "text/html",
    },
    body: body,
  };
  return response;
};