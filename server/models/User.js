const {Schema, model} = require("mongoose");

const User = new Schema({
    username:{ type: String, unique: true },
    password: { type: String},
    role:[{type:String, ref:'Role'}]
});

module.exports = model("User",User);