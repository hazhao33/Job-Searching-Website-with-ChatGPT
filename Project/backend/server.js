require('dotenv').config(); //importing dotenv module to use the enviorment variables in the .env file
const port = process.env.PORT;
const app = require('./backend');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(port, () =>{
        console.log(`Datebase connected and Express running at port ${port}`);
    })
 })
 .catch((error)=>{
    console.log(error);
 })
