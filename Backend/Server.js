// *******************   JAI sHREE RAM    ********************* \\
const express=require('express');
const app=express();
const db=require('./Config/dbConnection');
require('dotenv').config();
const cors=require('cors');

const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(cors());

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is Started...");
})
app.get('/',(req,res)=>{
    res.send("Server is Started");
})

const routes=require('./Routes/routes')
app.use('/user',routes);

     