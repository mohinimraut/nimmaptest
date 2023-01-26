require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("Connection fail")
})