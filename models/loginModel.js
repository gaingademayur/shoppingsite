const mongoose = require('mongoose')
const Schema = mongoose.Schema

loginSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

let loginPost = new mongoose.model('login', loginSchema)

module.exports = loginPost