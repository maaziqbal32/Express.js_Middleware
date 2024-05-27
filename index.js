const express= require('express');
 const path = require('path');
// lec 25 use of the middleware
 const page = express();
 const reqFilter=(req,res,next)=>{
       if(!req.query.age){
            res.send("Please enter the age ")
       }else if(req.query.age<18){
        res.send("you Can't access the page ")
       }
       next();
 }
   page.use(reqFilter);
 page.get('',(_,res)=>{
      res.send("This is the home page ")
   });
   
   page.get('/about',(_,res)=>{
         res.send("This is the about page ")
      });
   
   
   
    page.listen(5000);