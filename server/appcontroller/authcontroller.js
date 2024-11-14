const schemapage=require('../userschema/schema')
const argon=require('argon2')
const jsw=require('jsonwebtoken')

const loginpage=async(req,res)=>{
    console.log('third check',req.body);
    
    try {
        const finduser=await schemapage.findOne({email:req.body.email})
        if(!finduser){
            res.status(401).json('email is not found')
            
        }
        console.log(finduser);
        if( await argon.verify(finduser.password,req.body.password)){
            const token=jsw.sign({id:finduser._id},process.env.jswtoken,{expiresIn:'1d'})
            console.log(token);
            return res.status(200).json({jswtoken:token,userid:finduser._id})

        }else{
            res.status(401).json('password didnt match')
        }
        

        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports={loginpage}