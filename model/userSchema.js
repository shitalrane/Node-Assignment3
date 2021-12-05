const express=require("express");
const app=express();
const mongoose=require("mongoose");
var bcrypt=require("bcryptjs");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    confirmpassword:{
        type:String,
        required:true
    },
    
    isAdmin:{
        type:Boolean,
        required:true
    },
    hashpass:{
        type:String
    }
});
module.exports=mongoose.model("user", userSchema)