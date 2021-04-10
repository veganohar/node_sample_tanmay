const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.listen(port,()=>{
    console.log("Your App is running on the Port " + port);
})

app.get("/",(req,res)=>{
    res.send(["Hello world","Welcome","Express JS"]);
})

require("./app/routes/test.routes")(app);