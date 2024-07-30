const mongoose = require("mongoose");
const config = require("../../config.js")



const connectDB = async () => {
    try {
            let connection = await mongoose.connect(config.dbUrl);
            console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}


module.exports = connectDB