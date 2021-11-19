const express = require("express");
const path = require("path");
const app = express();

app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get('*',(req,res)=>{
    res.render('404error');
})

app.listen(80,()=>{
    console.log("Ho gya ported!");
})