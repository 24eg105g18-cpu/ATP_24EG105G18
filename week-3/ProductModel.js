import {Schema,model} from 'mongoose'
//create productId(required),productName,price(min 10000 max 50000),brand(required)
const productSchema=new Schema({
//structure of the product schema
productId:{
    type:String,
    required:[true,"productId is required"],
},
productName:{
    type:String,
    required:[true,"Product name is required"]
},
price:{
    type:Number,
    required:[true,"price of the product is required"],
    min:[10000,"products price should be min 10000"],
    max:[50000,"price should not exceed 50000"],
},
brand:{
type:String,
required:[true,"brand name required"]
}
})
//product model
export const ProductModel= model("product",productSchema)
