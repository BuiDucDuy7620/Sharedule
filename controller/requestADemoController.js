const requestADemoModel = require('../model/requestADemoModel.js')
const { requestADemoValidate } = require('../middleware/validate.js')

class requestADemoController {
    postRequestADemo = (req, res) => {
        const { error, value } = requestADemoValidate(req.body)
        if (error) return res.status(400).send(error.details[0].message)
        // const value=req.body.task
        let requestADemo = new requestADemoModel(value)
        requestADemo.save((error, demo) => {
            if (error) {
                res.send(error)
            } else {
                console.log('Gui request a demo thanh cong');
                res.send(demo)
            }
        })
    }
}
module.exports =new requestADemoController()