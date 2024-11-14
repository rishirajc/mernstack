const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
app.use(cors())
const mongoose=require('mongoose')

const routt=require('./router/userrouter')
const auth=require('./router/authrouter')

mongoose.connect(process.env.moongo).then(()=>{
    console.log('data base are connected');
    
})
app.use(express.json())
app.use('/moon',routt)
app.use('/logindata',auth)
app.listen(7000,()=>{
    console.log('port is connected');
    
})