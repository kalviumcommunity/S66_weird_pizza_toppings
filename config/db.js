const mongoose = require('mongoose');
require('dotenv').config()

const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is connected")
    }catch(error){
        console.error(error.message)
    }
}

module.exports = connectdb;