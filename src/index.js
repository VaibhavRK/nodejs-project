const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

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

app.listen(port,()=>{
    console.log("Ho gya ported!");
})