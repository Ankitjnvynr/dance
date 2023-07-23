const express = require("express");
const  path =require("path");
const app = express();
const port= 80;


// expreess staic stuff
app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded());

// pug static stuff
app.set('view engine','pug')// set template engine
app.set('views',path.join(__dirname,'views')) //set view directory


// endpoint
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})

// server start 
app.listen(port,()=>{
    console.log("success!");
})
