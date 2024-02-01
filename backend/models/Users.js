const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avoidnews: {
        type: Array,
        default: []
    },   
})

const User = mongoose.model("User", UserSchema);
module.exports = User;