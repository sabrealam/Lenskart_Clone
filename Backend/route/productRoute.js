const productRouter = require("express").Router();
const {
  Mens,
  Womens,
  Bluelens,
  Buy1get1,
  Kidslense,
  Kidssunglass,
  Screenlense,
  Product,
} = require("../models/productModel");

// <!-------------------- Mens ------------------------->

productRouter.get("/", async (req, res) => {
  let data = await Mens.find({});
  res.send(data);
});
productRouter.get("/:id", async (req, res) => {
    let id = req.params.id
  let data = await Mens.findById(id);
  res.send(data);
});
// <!-------------------- Womens ------------------------->

productRouter.get("/womens", async (req, res) => {
  let data = await Womens.find({});
  res.send(data);
});
productRouter.get("/womens/:id", async (req, res) => {
    let id = req.params.id
  let data = await Womens.findById(id);
  res.send(data);
});

// <!-------------------- Bluelens --------------------->
productRouter.get("/bluelens", async (req, res) => {
  let data = await Bluelens.find({});
  res.send(data);
});
productRouter.get("/bluelens/:id", async (req, res) => {
    let id = req.params.id
  let data = await Bluelens.findById(id);
  res.send(data);
});

// <!-------------------- Buy1get1 ---------------------->
productRouter.get("/buy1get1", async (req, res) => {
  let data = await Buy1get1.find({});
  res.send(data);
});
productRouter.get("/buy1get1/:id", async (req, res) => {
    let id = req.params.id
  let data = await Buy1get1.findById(id);
  res.send(data);
});

// <!-------------------- Kidslense --------------------->
productRouter.get("/kidslense", async (req, res) => {
  let data = await Kidslense.find({});
  res.send(data);
});
productRouter.get("/kidslense/:id", async (req, res) => {
    let id = req.params.id
  let data = await Kidslense.findById(id);
  res.send(data);
});

// <!-------------------- Kidssunglass ------------------->
productRouter.get("/kidssunglass", async (req, res) => {
  let data = await Kidssunglass.find({});
  res.send(data);
});
productRouter.get("/kidssunglass/:id", async (req, res) => {
    let id = req.params.id
  let data = await Kidssunglass.findById(id);
  res.send(data);
});

// <!-------------------- Screenlense ------------->
productRouter.get("/screenlense", async (req, res) => {
  let data = await Screenlense.find({});
  res.send(data);
});
productRouter.get("/screenlense/:id", async (req, res) => {
    let id = req.params.id
  let data = await Screenlense.findById(id);
  res.send(data);
});

module.exports = productRouter;
