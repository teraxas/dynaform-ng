const express = require('express');
const app = express();

var dirToServe = __dirname + '/../dist';
var port = process.env.PORT || 8080;

// Run the app by serving the static files
// in the dist directory
app.use(express.static(dirToServe));

// Start the app by listening on the default
// Heroku port
app.listen(port);

console.log(`Serving ${dirToServe} on port ${port}`);