const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://thakurdeepraj51:kzMRVrdH6-d2ZU@cluster0.j4pmv.mongodb.net/todos");

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