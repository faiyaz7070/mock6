const express = require('express');
const connection = require('./config/config')
const user = require('./routes/user.route')
const quiz = require('./routes/quiz.route');

const app = express();


app.use(express.json())
app.use("/user",user);
app.use("/quiz",quiz);

app.get('/', (req, res) =>{
    res.send("Welcome to quiz..")
})

app.listen(4500, async(req,res)=>{
    try{
        await connection 
        console.log('connected to db');
    } catch(err){
        console.log(err.message);
        
    }
    console.log("server is running on port 4500 ");
})