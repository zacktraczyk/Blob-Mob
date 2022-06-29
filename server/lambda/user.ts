import { DynamoDB } from "aws-sdk"

const userDB = new DynamoDB.DocumentClient();

exports.handler = async (event: any, context: any) => { // <++> FIX: specify type
    const TABLE= 'users'
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    };

    let path = event.resource;
    let httpMethod = event.httpMethod;
    let route = httpMethod.concat(' ').concat(path);

    try {
        switch (route) {
            case "GET /users":
                body = await userDB.scan({TableName: TABLE}).promise();
                break;
            case "GET /users/scores":
                body = {
                    0: {
                        name: "Best guy",
                        highscore: 432,
                    },
                    1: {
                        name: "Second Best guy",
                        highscore: 100,
                    },
                    2: {
                        name: "Worst guy132",
                        highscore: 2,
                    },
                }
                // body = await userDB
                // .scan({TableName: TABLE}, 
                //     (err, data) => {
                //         if (err) {
                //             console.log("Error retrieving scores", err)
                //         } else {
                //             console.log("Retrieving Scores", data);
                //             data.Items?.forEach((element, index, array) => {
                //             });
                //         }
                //     }
                //     ).promise();
                break;
            case "GET /users/{id}":
                body = await userDB
                    .get({
                        TableName: TABLE,
                        Key: {
                            id: event.pathParameters.id
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
                            id: '' + Date.now(),
                            username: requestJSON.username,
                            password: requestJSON.password,
                            tutorial: requestJSON.tutorial,
                            highscore: requestJSON.highscore,
                        }
                    })
                    .promise();
                body = `Put item ${requestJSON.username}`;
                break;
            case "DELETE /users/{id}":
                await userDB
                    .delete({
                        TableName: TABLE,
                        Key: {
                            id: event.pathParameters.id
                        }
                    })
                    .promise();
                body = `Deleted item ${event.pathParameters.id}`;
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