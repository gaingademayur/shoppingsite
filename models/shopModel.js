// const { BSON } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopSchema = new Schema({
    name: {
        type: String
    },
    // img: {
    //     type: BSON
    // },
    description: {
        type: String
    },
    gender: {
        type: String
    },
    price: {
        type: Number
    }
})

const shopModel = new mongoose.model('shop', shopSchema)

module.exports = shopModel