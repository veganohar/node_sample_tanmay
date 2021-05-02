const db = require('../models');
const User = db.user;

exports.testpost = (req,res)=>{
    res.send("Post Call is working");
} 

exports.testdelete = (req,res)=>{
    res.send("Delete Call is working");
}

exports.testput = (req,res)=>{
    res.send("Put Call is working");
}

exports.databody = (req,res)=>{
    res.send(req.body);
}

exports.dataparams = (req,res)=>{
    res.send(req.params);
}

exports.dataquery = (req,res)=>{
    res.send(req.query);
}


exports.testejs = (req,res)=>{
    let data ={
        title:"Sample Ejs File",
        heading:"Wlcome to Ejs Test file"
    }
    res.render("test",data);
}


exports.form = (req,res)=>{
    res.render("form");
}

exports.result = (req,res)=>{
    let user = new User();
    for(let p in req.body){
        user[p] = req.body[p];
    }
    user.save((err,response)=>{
        if(err){
            let obj = {
                color:'error',
                msg:err
            }
            res.render("result",obj);
        }
        user.msg = 'Data saved Successfully';
        user.color = 'success'
        res.render("result",user);
    })
   
}