import { Client } from "renderfarm";

var client = new Client();
client.Connect()
    .then(function(value){
        console.log("Hello renderfarm.js!");
    })
    .catch(function(err) {
        console.error("Some error: ", err);
    });
