

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

