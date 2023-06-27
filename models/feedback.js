const mongoose = require("mongoose")
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    feedback: {
        type: String
    }
})
let feedback_post = mongoose.model("feedbacks", feedbackSchema)

module.exports = feedback_post;