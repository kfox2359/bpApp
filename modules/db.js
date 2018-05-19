// This module performs CRUD operations on the DynamoDB
var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
const TABLE_NAME = "bp_readings";
let docClient = new AWS.DynamoDB.DocumentClient();
let params = {
    TableName: TABLE_NAME,
    Key: {}
}
exports.read = function (data) {
    params.Key = {
        "Index": data
    };

    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
    return "Read function called!";
}

exports.update = function (data) {
    return "Update function called!";
}

exports.delete = function (data) {
    return "Delete function called!";
}

exports.write = function (data) {
    return "Write function called!";
}