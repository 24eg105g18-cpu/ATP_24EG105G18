import {Schema,model,Types} from 'mongoose'


const commentSchema=new Schema({
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"User ID requires"],
    },
    comment:{
        type:String,
    },
});

const articleSchema=new Schema({
    author:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"Author ID is required"],
    },
    title:{
        type: String,
        required:[true,"Title is required"],
    },
    category:{
        type:String,
        required:[true,"category is required"],
    },
    content:{
        type:String,
        required:[true,"content is required"],
    },
    comments:[{type:commentSchema,default:[]}],
    isArticleActive:{
        type:Boolean,
        default:true
        
    }
},
{
     timestamps:true,
        versionKey:false,
        strict:"throw"
})
//create article model
export const ArticleModel=model("article",articleSchema)
