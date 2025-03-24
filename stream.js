const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname,'Files','hello.txt'),{encoding : 'utf8'});
const writeStream = fs.createWriteStream(path.join(__dirname,'Files','new_file.text'));

// readStream.on('data',(datachunk) => {
//     console.log(datachunk);
//     writeStream.write(datachunk);
// })

readStream.pipe(writeStream);