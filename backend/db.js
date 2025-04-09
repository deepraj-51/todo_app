const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const todoSchema = mongoose.Schema({    
    id : Number,
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}