// This module performs CRUD operations on the DynamoDB
var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
const TABLE_NAME = "bp_readings";
let docClient = new AWS.DynamoDB.DocumentClient();

exports.read = function (data) {
    let params = {
        TableName: TABLE_NAME,
        KeyConditionExpression: "#id = :idValue",
        ExpressionAttributeNames: {
            "#id": "Id"
        },
        ExpressionAttributeValues: {
            ":idValue": data
        }
    };
    return new Promise((resolve, reject) => {
        docClient.query(params, function (err, data) {
            if (err) {
                reject("Unable to read item. Error JSON: " + JSON.stringify(err, null, 2));
            } else {
                resolve(JSON.stringify(data.Items[0], null, 2));
            }
        });
    });
};

exports.readAll = function () {
    var params = {
        TableName: TABLE_NAME,
    };
    return new Promise((resolve, reject) => {
        docClient.scan(params, function (err, data) {
            if (err) {
                reject("Unable to read item. Error JSON: " + JSON.stringify(err, null, 2));
            } else {
                resolve(JSON.stringify(data.Items, null, 2));
            }
        });
    });
};

exports.update = function (data) {
    return "Update function called!";
};

exports.delete = function (data) {
    return "Delete function called!";
};

exports.write = function (data) {
    return "Write function called!";
};