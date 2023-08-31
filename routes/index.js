import express  from "express";
const Proute=express.Router();


Proute.get("/get",(req,res)=>{
    res.render('index')
});

export default Proute;