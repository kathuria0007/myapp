import express  from "express";
import Proute from "./routes/index.js";
import expressLayouts from "express-ejs-layouts";
import { Sequelize }  from "sequelize";

const app=express();
app.set("view engine","ejs")
// app.set("views",__dirname +'/views')
app.use(express.static('public'))
app.set("layout","layouts/layout")
app.use(expressLayouts);
app.use("/",Proute)

const sequelize=new Sequelize("user","root","root",{
    dialect:"mysql",
    host:"localhost"
})
sequelize.authenticate()
.then(()=>{
    console.log("database Connected")
})
.catch((err)=>{
    console.log("error" + err)
})


app.listen(3030,()=>{
    console.log("Server Connected");
})