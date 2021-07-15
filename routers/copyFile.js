let express = require('express')
let fs=require('fs')

let copyFile = express.Router()

copyFile.post('/*', (req, res) => {
    path = req.path.replace(/%20/gi, ' ')
    fs.writeFileSync('./copiedFilePath.txt', path)
    res.end()
})

module.exports=copyFile