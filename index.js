const express=require("express");
const app=express();
const port=3333;
const mongoose=require("mongoose");
const userRoutes=require("./view/userRoutes")
app.use(express.json());
app.use(userRoutes);

mongoose.connect("mongodb+srv://MONGO_USER:12345@cluster0.vi2oi.mongodb.net/dbName?retryWrites=true&w=majority")
.then( ()=>{
    console.log(`DB Connected`)
}).catch(()=>{
    console.log(err);
})


app.listen(port ,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
