let fs = require('fs')

let newFolder = (path, folderName) => {
    fs.mkdirSync(path + '/' + folderName)
}

module.exports=newFolder