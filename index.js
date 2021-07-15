// Main modules

let express = require('express')
let app = express()
let path=require('path')

// Custom modules

let getFiles = require('./modules/getFiles')
let getDisks = require('./modules/getDiscs')

// APIs

let removeFile = require('./routers/removeFile')
let renameFile = require('./routers/renameFile')
let copyFile = require('./routers/copyFile')
let pasteFile = require('./routers/pasteFile')
let newFile = require('./routers/newFile')
let newFolder = require('./routers/newFolder')
const checkFileType = require('./routers/checkFileType')

// declarations and initial setup

let port = process.env.PORT || 3000

app.set('view engine', 'pug')

// Static file compatibility

app.use(express.static(path.join(__dirname,'views')))

// Route that will show all discs in the pc by getDisks module

app.get('/', (req,res) => {
    res.render('disk.pug', {
        disks: getDisks,
    })
})

// Api endpoints

app.use('/remove',removeFile)
app.use('/rename',renameFile)
app.use('/copy',copyFile)
app.use('/paste',pasteFile)
app.use('/check',checkFileType)
app.use('/file',newFile)
app.use('/folder',newFolder)

// Route that will show all the files in the pc by getFiles module

app.use(getFiles)

app.get('/*', (req, res) => {
    res.end()
})

// Finally, listen to the port

app.listen(port, () => {
    console.log('app is running on port' + port)
})