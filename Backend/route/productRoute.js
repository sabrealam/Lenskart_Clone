const productRouter = require("express").Router();
const { Mens, Womens, Bluelens, Buy1get1, Kidslense, Kidssunglass, Screenlense } = require("../models/productModel");




productRouter.get("/", async (req, res) => {
    let data = await Mens.find({});
    let data2 = await Womens.find({});
    let data3 = await Bluelens.find({});
    let data4 = await Buy1get1.find({});
    let data5 = await Kidslense.find({});
    let data6 = await Kidssunglass.find({});
    let data7 = await Screenlense.find({});
    res.send([...data, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7]);
})





module.exports = productRouter