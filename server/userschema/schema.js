const mongoose=require('mongoose')

const data=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    mobile:{type:Number,required:true},
    pincode:{type:Number,required:true}
})
module.exports=mongoose.model('/react',data)