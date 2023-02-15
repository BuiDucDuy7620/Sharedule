const express=require('express')
const requestADemoRouter=express.Router()
const requestADemoController=require('../controller/requestADemoController')
requestADemoRouter.post('/book-a-demo',requestADemoController.postRequestADemo)
requestADemoRouter.get('/getAllBookADemo',requestADemoController.getAllBookADemo)
requestADemoRouter.get('/:id',requestADemoController.getBookADemoById)

module.exports =requestADemoRouter
