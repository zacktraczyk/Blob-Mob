import { DynamoDB } from "aws-sdk"

const userDB = new DynamoDB.DocumentClient();

exports.handler = async (event: any, context: any) => { // <++> FIX: specify type
    const TABLE= 'users'
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    };

    let path = event.resource;
    let httpMethod = event.httpMethod;
    let route = httpMethod.concat(' ').concat(path);

    try {
        switch (route) {
            case "GET /users":
                body = await userDB.scan({TableName: TABLE}).promise();
                break;
            case "GET /users/{userid}":
                body = await userDB
                    .get({
                        TableName: TABLE,
                        Key: {
                            userid: event.pathParameters.userid
                        }
                    })
                    .promise();
                break;
            case "PUT /users":
                let requestJSON = JSON.parse(event.body);
                await userDB
                    .put({
                        TableName: TABLE,
                        Item: {
                            userid: Date.now(),
                            username: requestJSON.username,
                            password: requestJSON.password,
                            tutorial:requestJSON.tutorial,
                            highscore:requestJSON.highscore,
                        }
                    })
                    .promise();
                body = `Put item ${requestJSON.userid}`;
                break;
            case "DELETE /users/{userid}":
                await userDB
                    .delete({
                        TableName: TABLE,
                        Key: {
                            userid: event.pathParameters.userid
                        }
                    })
                    .promise();
                body = `Deleted item ${event.pathParameters.userid}`;
                break;

            default:
                throw new Error(`Unsupported route: "${route}"`);
        }
    } catch (err) { // <++> FIX: specify type
        console.log(err)
        statusCode = 400;
        body = err.message;
    } finally {
        console.log(body)
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers
    };
};