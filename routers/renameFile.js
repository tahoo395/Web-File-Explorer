let express = require('express')
let rename = require('../modules/rename')

let renameFile = express.Router()

renameFile.post('/*', (req, res) => {
    path = req.path.replace(/%20/gi, ' ').replace(/\//,'')
    rename(path, req.query.newName)
    res.end()
})

module.exports=renameFile