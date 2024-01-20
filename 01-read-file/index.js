const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const filePath = path.normalize(path.join(ROOT, "text.txt"));
 
const stream = new fs.ReadStream(filePath, {encoding: 'utf-8'});
 
stream.on('readable', function(){
    const data = stream.read();
    if(data != null) console.log(data);
});