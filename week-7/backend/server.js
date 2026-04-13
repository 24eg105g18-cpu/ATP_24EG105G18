import exp from 'express'
import { connect } from 'mongoose' 
import { config} from 'dotenv'
import { authorApp } from './APIs/AuthorAPI.js'
import { userApp } from './APIs/UserAPI.js'
import { adminApp } from './APIs/AdminAPI.js'
import { commonApp } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
config()
//create express app
const app=exp()
//add cookie parser middle ware
app.use(cookieParser())
//order imp
//body parser middlewareimport exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./APIs/UserAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";
import cookieParser from "cookie-parser";
config();
//create express app
const app = exp();
//add cookie parser middeleware
app.use(cookieParser())
//body parser middleware
app.use(exp.json());
//path level middlewares
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

//connect to db
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");
    //assign port
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`server listening on ${port}..`));
  } catch (err) {
    console.log("err in db connect", err);
  }
};

connectDB();

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.log("error is ",err)
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});
app.use(exp.json())
//path level middle wares
app.use("/author-api",authorApp)
app.use("/user-api",userApp)
app.use("/admin-api",adminApp)
app.use("/auth",commonApp)
//asign port
const port=process.env.PORT ||5000
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("database connected succesfully")
        app.listen(port,()=>console.log(`server lsitening on ${port}...`))
    }catch(err){
        console.log("error in connecting to the database",err)
    }
}
connectDB()
//to handle invalid path
app.use((req,res,next)=>{
    res.status(404).json({message:`invalid path on request: ${req.url}`})
})
//to handle errors(error handling middle ware)
app.use((err,req,res,next)=>{//4 parameters are used only to let express know that its error handler middleware....velletappudu chudadhu error vachinappude return la ee error handler middleware appude work avvuddi(request vachinappudu ee middleware panicheyadhuuu)
    //res.json({message:"error occured",error:err.message}) -->we arent using this because it is basic error handling,so we must refine it litk below
    console.log(err)
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    if(err.name==="CastError"){
        return res.status(400).json({message:"error is below",error:err.message})
    }
    //send serverside errors
    return res.status(500).json({message:"error is below",error:"server side error"})
    //validation error,cast error,,serverside error
})