const express=require('express')
const exportExcelRouter=express.Router()
// const { ResponseExportExcel } = require('../libs/handleResponse');
const requestADemoController=require('../controller/requestADemoController');
// exportExcelRouter.get('/bookADemo',ResponseExportExcel(requestADemoController.exportListBookADemo))
exportExcelRouter.get('/exportListBookADemo',requestADemoController.exportListBookADemo)
exportExcelRouter.get('/exportListBookADemoById/:id',requestADemoController.exportListBookADemoById)

module.exports = exportExcelRouter;