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

// Finding Search  Query

operationRouter.get("/search/:key", async (req, res) => {
  let { key } = req.params;
  try {
    let data = await Product.find({
      $or: [
        { tags: { $regex: key, $options: "i" } },
        {  searchProductName: { $regex: key, $options: "i" } },
        { type: { $regex: key, $options: "i" } },
        {subCollection : { $regex: key, $options: "i" }},
        {brand_name : { $regex: key, $options: "i" }},
        {color : { $regex: key, $options: "i" }},
  
      ],
      
    }).limit(10);
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


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

operationRouter.post("/viewfavorite", auth, async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email });
  res.send(user.favorite);
}); 
operationRouter.post("/viewcart", auth, async (req, res) => {
  let { email } = req.body;
  let user = await User.findOne({ email }); 
  res.send(user.cart);
});

module.exports = operationRouter;
