const jsw=require('jsonwebtoken')

const verifytoken=(req,res,next)=>{
    console.log("first",req.headers.token);
    
    try {
        const token=req.headers.token
        if(token){
            jsw.verify(token,process.env.jswtoken,(err,data)=>{
                console.log('final answer in jsw',data);
                if(err){
                    return res.status(401).json('token not verify')
                }
                if(req.parama.id==data.id){
                    next()
                }else{
                    return res.status(402).json('user and token didnt match')
                }
                
            })
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
module.exports=verifytoken