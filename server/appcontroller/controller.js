const users=require('../userschema/schema')
const agron=require('argon2')

const posted=async (req,res)=>{
    console.log('third check',req.body);
    
    req.body.password=await agron.hash(req.body.password)
    console.log(req.body.password);
    
    try {
        const hello=await users.create(req.body)
        console.log('fourth check',hello);
        

       return res.status(200).json(hello)
    } catch (error) {
        res.status(500).json(error)
    }
}
const getted=async (req,res)=>{
    try {
        const world=await users.findById(req.params.id)
        res.status(200).json(world)
    } catch (error) {
        res.status(500).json(error)
    }
}
const Updatedata=async(req,res)=>{
    if(req.body.password){
        req.body.password=await agron.hash(req.body.password)
 }

console.log("************",req.body,req.params.id);

    try {
        await users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({message:"file updated"})

    } catch (error) {
        res.status(500).json(error)
        
    }
}
const Deletedata=async(req,res)=>{
    try {
        await users.findByIdAndDelete(req.params.id)
        res.status(200).json('delete sucessful')
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports={posted,getted,Updatedata,Deletedata}