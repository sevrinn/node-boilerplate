const fs = require('fs') //requires File System in node

const folderName = process.argv[2] || 'Project' //sets folderName var to equal the first argument you put in after node file to run

fs.mkdirSync(folderName);