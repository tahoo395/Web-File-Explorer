let express = require('express')
let isImage = require('is-image')
let isText = require('is-text-path')
let isVideo = require('is-video')

let checkFileType = express.Router()

checkFileType.get('/:fileName', (req, res) => {

    let fileName=req.params.fileName

    if (isImage(fileName) ){
        res.end('image-file.svg')
    }
    else if (isVideo(fileName) ){
        res.end('video-file.svg')
    }
    else if (isText(fileName) & !fileName.includes('.txt')) {
        res.end('code-file.svg')
    }
    else if (isText(fileName)) {
        res.end('text-file.svg')
    }
    else if (fileName.includes('.pdf')) {
        res.end('pdf-file.svg')
    }
    else if (fileName.includes('.zip')) {
        res.end('zip-file.svg')
    }
    else if (fileName.includes('.mp3') | fileName.includes('.wav')) {
        res.end('audio-file.svg')
    }
    else if(fileName.includes('.')) {
        res.end('file.svg')
    }
    else {
        res.end('folder.svg')
    }
})


module.exports=checkFileType