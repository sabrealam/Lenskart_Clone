const productRouter = require("express").Router();
const { Mens, Womens, Bluelens, Buy1get1, Kidslense, Kidssunglass, Screenlense } = require("../models/productModel");




productRouter.get("/", async (req, res) => {
    let data = await Mens.find({});
    res.send(data);
})

productRouter.get("/womens", async (req, res) => {
    let data = await Womens.find({});
    res.send(data);
})

productRouter.get("/bluelens", async (req, res) => {
    let data = await Bluelens.find({});
    res.send(data);
})

productRouter.get("/buy1get1", async (req, res) => {
    let data = await Buy1get1.find({});
    res.send(data);
})

productRouter.get("/kidslense", async (req, res) => {
    let data = await Kidslense.find({});
    res.send(data);
})

productRouter.get("/kidssunglass", async (req, res) => {
    let data = await Kidssunglass.find({});
    res.send(data);
})

productRouter.get("/screenlense", async (req, res) => {
    let data = await Screenlense.find({});
    res.send(data);
})




module.exports = productRouter