const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const dbFunction = require("./Backend/config/db");
 
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./Backend/route/userRoute"));
app.use("/api/products", require("./Backend/route/productRoute"));
app.use("/api", require("./Backend/route/oprationRouter"));

app.get("/", (req, res) => {
    res.send(`hello world`);
})


app.listen(process.env.PORT || 5000, () => {
    try {
        console.log("server is running");
        dbFunction();
    } catch (error) {
        console.log(error);
    }
})