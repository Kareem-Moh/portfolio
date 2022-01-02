const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        value: { type: String, required: true },
        repo: { type: Number, required: true },
        author: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('comments', Comment)