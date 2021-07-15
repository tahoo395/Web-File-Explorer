let express = require('express')
let file = require('../modules/file')

let newFile = express.Router()

newFile.post('/*', (req, res) => {
    let path = req.path.replace('/', '').replace(/%20/gi,' ')
    file(path , req.query.newName)
    res.end()
})

module.exports=newFile