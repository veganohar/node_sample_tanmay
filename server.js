const express = require("express");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.set('view engine', 'ejs');
app.listen(port,()=>{
    console.log("Your App is running on the Port " + port);
})

mongoose.connect('mongodb://localhost/tanmay_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(console.log("DB connected successfully")).catch(
    (err)=>{
        console.log(err);
        process.abort();
    }
)

app.get("/",(req,res)=>{
    res.send(["Hello world","Welcome","Express JS"]);
})

require("./app/routes/test.routes")(app);