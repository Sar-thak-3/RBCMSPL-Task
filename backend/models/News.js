const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    newnumber: {
        type: Number,
        unique: true,
        required: true
    },
    date: {
        type: Date
    }
})

const News = mongoose.model("News", NewsSchema);
module.exports = News;