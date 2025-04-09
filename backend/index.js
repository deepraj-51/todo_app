const express = require("express");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const port = 8080;

app.post("/todo", async(req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg  : "you sent wrong inputs"
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        id : createPayload.id,
        title : createPayload.title,
        description : createPayload.description

    })

    res.json({
        msg : "Todo created"
    })
})


app.get("/todos", async(req,res)=>{

    const todos = await todo.find({});
    res.json({
        todo : todos,
    })
})

app.get("/todo/:id", async(req,res)=>{
    const id = req.params.id;
    const todoItem = await todo.findOne({
        id : id
    })    
    res.json({
        todo : todoItem
    })
}
)              
    

app.put("/completed", async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true,
    })    

    res.json({
        msg : "todo marked as completed"
    })
})

app.listen(port,()=>{
    `the app is running in port ${port}`;
})


