const mongoose=require('mongoose');
require('dotenv').config();

//Define the mongoDB Connection URL
const mongoURL=process.env.MONGO_URL;

//set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection
//Mongoose maintains a default connection object representing the mongodb connection.

const db=mongoose.connection;

// default event listenrs for database connection
db.on('connected',()=>{
    console.log('Connected to mongodb server');
});

db.on('error',()=>{
    console.error('Connected error to mongodb server',err);
});

db.on('disconnected',()=>{
    console.log('disConnected to mongodb server');
});

module.exports=db;