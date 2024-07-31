const operationRouter = require("express").Router();
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
const User = require("../models/userModel");
const auth = require("../middleweres/auth");

operationRouter.post("/addtocart/:id", auth, async (req, res) => {
  let { email } = req.body;
  let id = req.params.id; // this is not a mongo id it is the id already given in object
  let item = await Product.find({ id: id });
  console.log(item);
  let user = await User.findOne({ email });
  user.cart.push(...item);
  await user.save();

  res.send(user);
});
operationRouter.post("/addtofavorite/:id", auth, async (req, res) => {
  let { email } = req.body;
  let id = req.params.id; // this is not a mongo id it is the id already given in object
  let item = await Product.find({ id: id });
  console.log(item);
  let user = await User.findOne({ email });
  user.favorite.push(...item);
  await user.save();

  res.send(user);
});

operationRouter.get("/viewcart", auth, async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email });
  res.send(user.cart);
});

module.exports = operationRouter;
