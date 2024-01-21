const fs = require('fs')
const readline = require('readline')
const path = require('path');

const ROOT = __dirname;
const filePath = path.normalize(path.join(ROOT, "output.txt"));

const rl = readline.createInterface(process.stdin, process.stdout);

let stream = "";

console.log("Привет! Введите текст:");

rl.prompt();

rl.on('line', function(answer) {
    if (answer.trim() === 'exit') rl.close();
    stream = stream + answer;
    fs.promises.writeFile(filePath, stream);    
    rl.prompt();
}).on('close', function() {
    console.log('Файл записан. Пока!');
    process.exit(0);
});