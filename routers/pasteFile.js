let express = require('express')
let fs=require('fs')
let fse = require('fs-extra')
let path = require('path')

let pasteFile = express.Router()

pasteFile.post('/*', (req, res) => {
    path = req.path.replace(/%20/gi, ' ').replace(/\//,'')
    let copiedFilePath = fs.readFileSync('./copiedFilePath.txt').toString().replace(/\//,'')

    fse.copySync(copiedFilePath, path)
    res.end()
})

module.exports=pasteFile