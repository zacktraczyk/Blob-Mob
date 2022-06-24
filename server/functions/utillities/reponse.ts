import { APIGatewayProxyResult } from 'aws-lambda';

const CORS_HEADERS = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
export function apiGatewayResponse(statusCode: number, body: any): APIGatewayProxyResult {
    return {
        statusCode,
        headers: CORS_HEADERS,
        body: JSON.stringify(body),
    };
}