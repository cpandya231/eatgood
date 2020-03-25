let AWS = require("aws-sdk");


AWS.config.update({
    region: "us-east-1",
    // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for restaurants");

var params = {
    TableName: "restaurant",

};

function getRestaurant(callback) {

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            callback(err, null);
        } else {
            console.log("Query succeeded.");
            callback(null, data.Items);

        }
    });
}

exports.getRestaurant = getRestaurant;