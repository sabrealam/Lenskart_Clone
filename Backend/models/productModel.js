const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrls: {
        type: String,
        required: true
    },
    prices: {
        type: String,
        required: true
    }
})

let Mens = mongoose.model('Mens', productSchema);
let Womens = mongoose.model('Womens', productSchema);
let Bluelens = mongoose.model('Bluelense', productSchema);
let Buy1get1 = mongoose.model('buy1get1', productSchema);
let Kidslense = mongoose.model('Kidslense', productSchema);
let Kidssunglass = mongoose.model('Kidssunglass', productSchema);
let Screenlense = mongoose.model('Screenlense', productSchema);

module.exports = {Mens, Womens, Bluelens, Buy1get1, Kidslense, Kidssunglass, Screenlense}