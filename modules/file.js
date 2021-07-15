let fs = require('fs')

let newFile = (path, fileName) => {
    fs.appendFileSync(path + '/' + fileName,'')
}

module.exports=newFile