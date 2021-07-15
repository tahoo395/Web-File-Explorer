let fs = require('fs-extra')

let remove = (path) => {
    return fs.remove(path)
}

module.exports=remove