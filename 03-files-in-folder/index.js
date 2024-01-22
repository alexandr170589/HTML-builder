const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const filePath = path.normalize(path.join(ROOT, "/secret-folder/"));
const option = {
    withFileTypes: true
  }

fs.readdir(filePath, option, (err, files) => { 
    if (err) 
      {console.log(err); }
    else { 
        files.forEach(file => {
                if (file.isFile()){                      
                  const nameFile = (file.name).replace((path.extname(filePath + file.name)), '');
                  const extNameFile = (path.extname(filePath + file.name)).slice( 1 );
                    fs.stat(filePath + file.name, (error, stats) => {
                      if (error) {
                        console.log(error);
                        return;
                      }    
                      console.log(nameFile + " - " + extNameFile + " - " + stats.size / 1024 + "kb");
                    });
                }            
    })
    }
  }) 

 
