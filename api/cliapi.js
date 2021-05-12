'use strict';
const AWS = require('aws-sdk'); 
const dbClient = new AWS.DynamoDB.DocumentClient();

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
            birthday: formatDate(body.birthday),
            salary: body.salary
          },
    };

    let putClient = await clientPUT(params).then(res => res).catch(err => {
        return err;
    })

    let response = {
        statusCode: 200,
        body: JSON.stringify({"parameters" : params ,"response": putClient}),
    };

    callback(null, response);

};

function clientPUT(params){
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

    let getClient = await clientGET(params).then(res => res).catch(err => {
        return err;
    })

    let response = {
        statusCode: 200,
        body: JSON.stringify(getClient),
    };

    callback(null, response);

};


function clientGET(params){
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

function formatDate(fecha){

    try {
        let f = fecha.split("/");        
        let dia = parseInt(f[0]);
        let mes = parseInt(f[1]);
        let ano = parseInt(f[2]);
        let fechaMDY =  mes.toString().padStart(2,"0") + "/" + dia.toString().padStart(2,"0") + "/" + ano.toString().padStart(4,"20");
        
        return new Date(fechaMDY).toString();

    } catch (error) {
        return "";
    }


}