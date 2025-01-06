const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});    
    })
})

app.post("/create",(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`,req.body.details,function(req,res){
        // res.redirect("/");
    })
})

app.listen(4000);