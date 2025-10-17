const express=require("express")
const cors=require("cors")
const app=express()

app.use(cors({origin:"*"}))
app.use(express.json())

app.get("/",function(req,res){
    let data="hi guys this is the server";
    res.json({data})
})

app.listen(3000,function(){
    console.log("server is running")
})