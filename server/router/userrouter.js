const { posted, getted, Updatedata, Deletedata } = require('../appcontroller/controller')


const router=require('express').Router()
router.post('/postData',posted)
router.get('/getData/:id', getted)
router.put('/update/:id',Updatedata)
router.delete('/delete/:id',Deletedata)
module.exports=router