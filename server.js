
const {MongoClient} = require('mongodb');

var express = require('express'),
  app = express(),
  port = 8000,

Task = require('./api/models/dataModel'),
mongoose = require('mongoose'),

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

 
const uri = "mongodb+srv://fastcut_admin:fastcut123@fastcut-tmuui.azure.mongodb.net/fastcut_db?retryWrites=true&w=majority&useNewUrlParser=true";
const dbName = "fastcut_db";

var client = new MongoClient(uri);

async function run() {
  try {
       await mongoose.connect(uri);
       console.log("Connected correctly to server");
       var routes = require('./api/routes/todoListRoutes'); //importing route
      routes(app); //register the route
      app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
       //var clientDb = client.db(dbName);
      } catch (err) {
       console.log(err.stack);
   }
}

run().catch(console.dir);

