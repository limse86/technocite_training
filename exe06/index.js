let fs = require('fs');
fs.readFile('test.txt','utf8', cb)

function cb(err,data){
      console.log(data)
}