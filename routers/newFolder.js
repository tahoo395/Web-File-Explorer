let express = require('express')
let folder = require('../modules/folder')

let newFolder = express.Router()

newFolder.post('/*', (req, res) => {
    let path = req.path.replace('/', '').replace(/%20/gi,' ')
    folder(path , req.query.newName)
    res.end()
})

module.exports=newFolder