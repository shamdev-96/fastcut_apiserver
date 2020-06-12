var express = require('express'),
  app = express(),
  port = 8080,
  mongoose = require('mongoose'),

   //created model loading here
  Task = require('./api/models/dataModel'),

  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser({limit: '10mb'}))
  app.use(bodyParser.json());
  var mongodbOptions = {
    server: {
       socketOptions: {
          socketTimeoutMS: 10000,
          connectionTimeout: 10000
       },
       auto_reconnect: true,
       reconnectTries: 60,
       reconnectInterval: 3000,
    },   
 };
 
  // mongoose instance connection url connection
mongoose.Promise = Promise
mongoose.connect("mongodb://localhost:27017/fastcut_db", mongodbOptions, function (err, res) {
    if (err) { 
        console.log('Connection refused to ' + "mongodb://localhost:27017/fastcut_db");
        console.log(err);
    } else {
        console.log('Connection successful to: ' + "mongodb://localhost:27017/fastcut_db");
    }
});



var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);