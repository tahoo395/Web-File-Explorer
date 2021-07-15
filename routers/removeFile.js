let express = require('express')
let remove = require('../modules/remove')

let removeFile = express.Router()

removeFile.post('/*', (req, res) => {
    remove(req.path.replace('/', '').replace(/%20/gi,' '))
    res.end()
})

module.exports=removeFile