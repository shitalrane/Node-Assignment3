const express=require("express");
const router=express.Router();
const userSchema=require("../model/userSchema")
var bcrypt=require("bcryptjs");
var jwt=require("jsonwebtoken")


router.post("/Register", (req,res)=>{
const user=new userSchema(req.body);
if(req.body.password==req.body.confirmpassword){
    var hashPassword=bcrypt.hashSync(req.body.password, 10);
    user.hashpass=hashPassword;
    user.save((err,user)=>{
        if(err){
            res.json(err)
        }else{
            res.json(user);
        }
    })
}else{
    res.json(`password do not match`)
}
});
router.post("/login", (req,res)=>{
    const user=new userSchema(req.body);
    if(req.body.email==user.email){
        if(req.body.password==user.password){
            var token=jwt.sign({email:req.body.email,password:req.body.password,isAdmin:true},'secretcode')
        res.json(token)
        }
        
    }else{
        res.json(`Email or Password is not correct `)
    }
    });

router.get("/users",(req,res)=>{
    const user=new userSchema(req.body);
    const token=req.headers.authorization

    var decoded=jwt.verify(token,'secretcode');
    if(decoded.isAdmin==true){
        userSchema.find({},(err,users)=>{
if(err){
            res.json(err)
        }else{
            res.json(users)
        }
        })
    }else{
        res.json(`please login as user`)
    }
})


module.exports=router;