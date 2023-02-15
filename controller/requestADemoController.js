const requestADemoModel = require('../model/requestADemoModel.js')
const { requestADemoValidate } = require('../middleware/validate.js')
const excelJS = require('exceljs')


const ejs = require('ejs')
const pdf = require('html-pdf')
const fs = require('fs')
const path = require('path')


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
    getAllBookADemo = (req, res) => {
        requestADemoModel.find({}, { agree: 0 }).exec((err, bookademos) => {
            if (err) {
                res.send('khong the lay thong tin all book a demo')
            } else {
                // console.log('lay thanh cong all book a demo', bookademos)
                res.json(bookademos)
            }
        })
    }
    getBookADemoById = (req, res) => {
        requestADemoModel.find({ _id: req.params.id }, { agree: 0 }).exec((err, bookademo) => {
            if (err) {
                res.send('khong the lay thong tin book a demo')
            } else {
                // console.log('lay thanh cong book a demo', bookademo)
                res.json(bookademo)
            }
        })
    }


    exportListBookADemo = async (req, res) => {
        try {
            const data = await requestADemoModel.find({})
            const workbook = new excelJS.Workbook()
            const worksheet = workbook.addWorksheet('my request BookADemo')
            worksheet.columns = [
                { header: 'S.no', key: 's_no', width: 10 },
                { header: 'Name', key: 'name', width: 10 },
                { header: 'Email', key: 'email', width: 10 },
                { header: 'Phone', key: 'phone', width: 10 },
                { header: 'Company', key: 'company', width: 10 }
            ]
            let count = 1
            data.forEach(
                (listdata) => {
                    listdata.s_no = count
                    worksheet.addRow(listdata)
                    count += 1
                }
            )
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = { bold: true };
            })
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', `attachment; filename=users.xlsx`);
            return workbook.xlsx.write(res).then(() => {
                res.status(200)
            })
        }
        catch (e) {
            res.status(500).send(e)
        }
    }
    exportListBookADemoById = async (req, res) => {
        try {
            const data = await requestADemoModel.find({ _id: req.params.id })
            const workbook = new excelJS.Workbook()
            const worksheet = workbook.addWorksheet('my request BookADemo')
            worksheet.columns = [
                { header: 'S.no', key: 's_no', width: 10 },
                { header: 'Name', key: 'name', width: 10 },
                { header: 'Email', key: 'email', width: 10 },
                { header: 'Phone', key: 'phone', width: 10 },
                { header: 'Company', key: 'company', width: 10 }
            ]
            let count = 1
            data.forEach(
                (listdata) => {
                    listdata.s_no = count
                    worksheet.addRow(listdata)
                    count += 1
                }
            )
            worksheet.getRow(1).eachCell((cell) => {
                cell.font = { bold: true };
            })
            res.setHeader(
                'Content-Type',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', `attachment; filename=users.xlsx`);
            return workbook.xlsx.write(res).then(() => {
                res.status(200)
            })
        }
        catch (e) {
            res.status(500).send(e)
        }
    }
    exportPDFListBookADemo = async (req, res) => {
        try {
            const users = await requestADemoModel.find({})
            const data = {
                requestADemoModel: users
            }
            // console.log('dddddddddddddddddddddddddd', users)

            const filePathName = path.resolve(__dirname, '../view/htmltopdf.ejs')
            const htmlString = fs.readFileSync(filePathName).toString()
            const options = {
                format: 'Letter'
            }
            const ejsData = ejs.render(htmlString, data)
            pdf.create(ejsData, options).toFile('data.pdf', (err, response) => {
                if (err) console.log(err)
                const filePath = path.resolve(__dirname, '../data.pdf')
                fs.readFile(filePath, (err, file) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send('could not dload file')
                    }
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', `attachment; filename="data.pdf"`);
                    res.send(file)
                })
            })
        }
        catch (e) {
            console.log(e.message);
        }
    }


}
module.exports = new requestADemoController()