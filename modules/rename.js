let fs = require('fs');
let path = require('path')

let rename = (pathOfFile, newName) => {
    
    let dirOfPath = path.dirname(pathOfFile)
    
    let newNamePath = path.join(dirOfPath, newName)
    
    fs.renameSync(pathOfFile, newNamePath);
}


module.exports = rename