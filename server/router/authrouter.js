const { loginpage } = require('../appcontroller/authcontroller')

const authrouter=require('express').Router()
authrouter.post('/login',loginpage)
module.exports=authrouter