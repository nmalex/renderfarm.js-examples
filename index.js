const rfarm1 = require('renderfarm');

var client = new rfarm1.Client();

client.Connect()
  .then(function(value) {
      console.log(value);
  })
  .catch(function(err) {
  });

