const mongoose = require("mongoose");
let Schema = mongoose.Schema;   

let postSchema = new Schema({
    name: {
        type: String,
    },
    city: {
        type: String
    }
},
    {timestamps: true }
);

let my_post = mongoose.model("second-collection", postSchema);

module.exports = my_post;
    