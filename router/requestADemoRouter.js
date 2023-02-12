const express=require('express')
const requestADemoRouter=express.Router()
const requestADemoController=require('../controller/requestADemoController')
requestADemoRouter.post('/book-a-demo',requestADemoController.postRequestADemo)

module.exports =requestADemoRouter