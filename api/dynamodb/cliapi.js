'use strict';
const AWS = require('aws-sdk'); 
const util = require('../../util/util')

let options = {};
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000',
    };
}

if (process.env.JEST_WORKER_ID) {
    options = {
        endpoint: 'http://localhost:8000',
        region: 'local-env',
        sslEnabled: false,
    };
}
const dbClient = new AWS.DynamoDB.DocumentClient(options);

module.exports.putClient = async (event, context, callback) => {
    let contextid = context.awsRequestId; 
    let body = JSON.parse(event.body);

    let params = {
        TableName: process.env.CLIENT_TABLE,
        Item: {
            id: contextid,
            dni: body.dni,
            name: body.name,
            lastName: body.lastName,
            address: body.address,
            birthday: util.formatDate(body.birthday),
            salary: body.salary
          },
    };

    let putClient = await this.clientPUT(params).then(res => res).catch(err => {
        return err;
    })

    let response = {
        statusCode: 200,
        body: JSON.stringify({"parameters" : params ,"response": putClient}),
    };

    callback(null, response);

};

module.exports.clientPUT = (params) => {

    return new Promise(function(res,rej){
        dbClient.put(params, function(err, data){
            if (err){
                rej(err);
            }else{
                res(data)
            }
        })
    })
}


module.exports.getClient = async (event, context, callback) => {

    let iid = event.pathParameters.id;

    let params = {
        TableName: process.env.CLIENT_TABLE,
        Key: {
            id: iid,
        },
    };


    let getClient = await this.clientGET(params).then(res => res).catch(err => {
        return err;
    })

    let response = {
        statusCode: 200,
        body: JSON.stringify(getClient),
    };

    callback(null, response);

};


module.exports.clientGET = (params) => {
    return new Promise(function(res,rej){
        dbClient.get(params, function(err, data){
            if (err){
                rej(err);
            }else{
                res(data)
            }
        })
    })
};
