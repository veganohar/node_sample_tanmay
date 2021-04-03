const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("Your App is running on the Port " + port);
})

app.get("/",(req,res)=>{
    res.send(["Hello world","Welcome","Express JS"]);
})

app.post("/testpost",(req,res)=>{
    res.send("Post Call is working");
})

app.delete("/testdelete",(req,res)=>{
    res.send("Delete Call is working");
})

app.put("/testput",(req,res)=>{
    res.send("Put Call is working");
})