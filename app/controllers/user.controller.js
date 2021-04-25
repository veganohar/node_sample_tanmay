const db = require('../models');
const User = db.user;

exports.saveNewUser = (req,res)=>{
    let user = new User();
    for(let p in req.body){
        user[p] = req.body[p];
    }
    user.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"User Details Saved Successfully"
        })
    })
}

exports.getAllUsers = (req,res)=>{
    User.find((err,users)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            data:users,
            message:"Users details retrieved Successfully"
        })
    })
}


exports.updateUser = (req,res)=>{
    User.updateOne({_id:req.body.id},req.body,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"User Details updated Successfully"
        })
    })
}

exports.deleteUser = (req,res)=>{
    User.deleteOne({_id:req.params.uid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"User Deleted Successfully"
        })
    })
}