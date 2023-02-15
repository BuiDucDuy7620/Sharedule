const express=require('express')
const exportPDFRouter=express.Router()
const requestADemoController=require('../controller/requestADemoController');
exportPDFRouter.get('/exportPDFListBookADemo',requestADemoController.exportPDFListBookADemo)
// exportPDFRouter.get('/exportPDFListBookADemoById/:id',requestADemoController.exportPDFListBookADemoById)

module.exports = exportPDFRouter;