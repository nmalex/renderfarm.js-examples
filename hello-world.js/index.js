var renderfarm = require("renderfarm");

var client = new renderfarm.Client();
client.Connect()
    .then(function(value){
        console.log("Hello renderfarm.js!");
    })
    .catch(function(err) {
        console.error("Some error: ", err);
    });
