const fs = require('fs');   

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory created!');
    })
}
else{
    fs.rmdir('./new',(err) => {
        if(err) throw err;
        console.log('Directory deleted!');
    })
}

process.on('uncaughtException', (err) => {
    console.log('There was an Uncaught: ' + err);
    process.exit(1);
});