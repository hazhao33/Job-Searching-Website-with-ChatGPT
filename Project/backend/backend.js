require('dotenv').config(); //importing dotenv module to use the enviorment variables in the .env file
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const port = process.env.PORT;
const aboutRoutes = require('./routes/aboutRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

//express app
const app = express();

//importing mongoose
const mongoose = require('mongoose');

app.use(cors());

//middleware
app.use(express.urlencoded({extended: false})); //to parse encoded urls or aka '%20' for space
app.use(express.json());

//routes
app.use('/about', aboutRoutes);
app.use('/user', userRoutes);
app.use('/company', companyRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(port, () =>{
        console.log(`Datebase connected and Express running at port ${port}`);
    })
 })
 .catch((error)=>{
    console.log(error);
 })



