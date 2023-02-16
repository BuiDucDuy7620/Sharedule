
const requestADemoRouter=require('./requestADemoRouter')

const exportExcelRouter=require('./exportExcelRouter')

const exportPDFRouter=require('./exportPDFRouter')


const Router=(app)=>{
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/sharedule',requestADemoRouter)
    app.use('/sharedule/exportExcel',exportExcelRouter)
    app.use('/sharedule/exportPDF',exportPDFRouter)
}
module.exports=Router