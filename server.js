const express = require('express');

// create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Express Server is Up");
})
delegate('selector', 'eventType', function(event) {
  
});
