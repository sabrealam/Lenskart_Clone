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

productRouter.get("/v2/mens", async (req, res) => {
  let data = await Mens.find({});
  res.send(data);
});
productRouter.get("/v2/mens/:id", async (req, res) => {
    let id = req.params.id
  let data = await Mens.findById(id);
  res.send(data);
});


productRouter.get("/v2/womens", async (req, res) => {
    try {
        const data = await Womens.find({});
        res.send(data);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
});

productRouter.get('/v2/womens/:id', async (req, res) => {
    const id = req.params.id;
    try { 
      const data = await Womens.findById(id);
      if (!data) {
        return res.status(404).send('Document not found');
      }
      res.send(data);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });


productRouter.get("/v2/bluelens", async (req, res) => {
  try {
    let data = await Bluelens.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get("/v2/bluelens/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await Bluelens.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

productRouter.get("/v2/buy1get1", async (req, res) => {
  try {
    let data = await Buy1get1.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get("/v2/buy1get1/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await Buy1get1.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

productRouter.get("/v2/kidslense", async (req, res) => {
  try {
    let data = await Kidslense.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get("/v2/kidslense/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await Kidslense.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

productRouter.get("/v2/kidssunglass", async (req, res) => {
  try {
    let data = await Kidssunglass.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get("/v2/kidssunglass/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await Kidssunglass.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})


productRouter.get("/v2/screenlense", async (req, res) => {  
  try {
    let data = await Screenlense.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

productRouter.get("/v2/screenlense/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await Screenlense.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})







module.exports = productRouter;
