const express = require ('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use (express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use('/users',require('./routes/userRouters'));
mongoose.connect(process.env.URL_DB).then(()=>{
    app.listen (process.env.PORT, ()=>{
        console.log (`DB connected && server running on port ${process.env.PORT}`);
    })
}).catch((error)=>{ console.log(`${error} did not connect`)})