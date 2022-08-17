import {APIGatewayEvent } from 'aws-lambda';
// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

export const lambdaHandler = async (_:APIGatewayEvent) => {
    try {
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world again and again',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
