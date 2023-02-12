
const requestADemoRouter=require('./requestADemoRouter')

const Router=(app)=>{
    // app.get('/',(req,res)=>{res.send('hello')})
    app.use('/sharedule',requestADemoRouter)

}
module.exports=Router