let AWS = require("aws-sdk");


AWS.config.update({
    region: "us-east-1",
    // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Querying for restaurants");



function getRestaurant(queryParams) {
    return new Promise((resolve, reject) => {
        var params = {
            TableName: "restaurant"
        };
        if (queryParams.city) {
            var expressionValues = {

                ":City": queryParams.city,
                ":RestaurantID": parseInt(queryParams.restaurantID)
            };
            params.ExpressionAttributeValues = expressionValues;
            params.KeyConditionExpression = "#City= :City and #RestaurantID= :RestaurantID";
            params.ExpressionAttributeNames = {
                "#City": "City",
                "#RestaurantID": "Restaurant ID"

            };

            docClient.query(params, function(err, data) {
                if (err) {
                    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Query succeeded.");
                    resolve(data.Items);

                }
            });
        } else {
            docClient.scan(params, function(err, data) {
                if (err) {
                    console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Query succeeded.");
                    resolve(data.Items);

                }
            });
        }

    });



}

exports.getRestaurant = getRestaurant;