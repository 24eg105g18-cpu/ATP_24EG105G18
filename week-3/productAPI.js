// create mini-express app(Separate route)
import exp from 'express'
import { ProductModel } from '../models/ProductModel.js';
export const ProductApp=exp.Router()
//DEFINE Product REST API Routes
//Create new Product
      ProductApp.post("/products",async(req,res)=>{
        //get new product obj from req
        const newUser=req.body;
        //Create new product document
        const newProductDocument= new ProductModel(newUser)
        //save
        const result =await newProductDocument.save();
         console.log("result : ",result)
        //send res
        res.status(201).json({message:"product created"});
        //Read all products
        ProductApp.get("/products",async(req,res)=>{
            //read all users from db
            let ProductsList=await ProductModel.find();
            //send res
            res.status(200).json({message:"users",payload:ProductsList});
        })
      })
// get Product
ProductApp.get("/products",async(req,res)=>{
       //verifyToken
        //Read object id from res
       // const uid=req.params.id
        //find user by id
        const productObj=await ProductModel.find() 
        //send res
         res.status(200).json({message:"user",payload:productObj})
      })
//get product by id
ProductApp.get("/products/:id",async(req,res)=>{
        //Read object id from res
        const pid=req.params.id
        //find user by id
        const ProductObj=await ProductModel.findOne({_id:pid})
        //send res
         res.status(200).json({message:"user",payload:ProductObj})
      })
//Update a user by id 
ProductApp.put("/products/:id",async(req,res)=>{
        //get modified user from req
        const modifiedProduct=req.body;
        const  pid=req.params.id;
        const updateProduct = await ProductModel.findByIdAndUpdate(pid,
            {$set:{...modifiedProduct}},
        {new:true,runValidators:true});
        res.status(200).json({message:"Product modified",payload:updateProduct})
      })
// delete product by id
ProductApp.delete("/products/:id",async(req,res)=>{
        //get id from req params
        let  pid=req.params.id;
        //find and delete user by id
        let deletedProduct= await ProductModel.findByIdAndDelete(pid)
        if(!deletedProduct){
            return res.status(404).json({message:"user not found"})
        }
        else{
            res.status(200).json({message:"User deleted",payload:deletedProduct})
        }
    })
