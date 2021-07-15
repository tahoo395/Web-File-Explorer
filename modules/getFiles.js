// Import the dependencies

let fs = require('fs')
let open = require('open')
let dirOfFile=require('path').dirname

// getFiles is a middleware. It will render the files and folders but if there is no files , it will throw an error

let getFiles = (req, res, next) => {
    try {

        // the path will be the url of request. If there is a space it will remove it using regex

        let path = req.originalUrl.substr(1).replace(/%20/gi,' ')

        // getting the directories

        if (fs.lstatSync(path).isDirectory()) {
            res.render('directory.pug', {
                directories: fs.readdirSync(path),
                directory_url: req.originalUrl,
                isDirectory: true,
                parent: path,
                previous : dirOfFile(req.originalUrl)+'/',
            })

            res.end()
        }

        // getting the files

        else if (fs.lstatSync(path).isFile()) {
            open(path, { wait: true })
            res.redirect('/'+dirOfFile(path))
            res.end()
        }
    }

    // throwing the error

    catch (e) {
        res.send('Sorry , the file was not found 🤐')
    }
}

// finally, export the module

module.exports=getFiles