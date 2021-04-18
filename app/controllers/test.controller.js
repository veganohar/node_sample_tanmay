

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
    res.render("result",req.body);
}