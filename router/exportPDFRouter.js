const express=require('express')
const exportPDFRouter=express.Router()
const requestADemoController=require('../controller/requestADemoController');
exportPDFRouter.get('/exportPDFAllListBookADemo',requestADemoController.exportPDFListBookADemo)
// exportPDFRouter.get('/exportPDFListBookADemoById/:id',requestADemoController.exportPDFListBookADemoById)

module.exports = exportPDFRouter;