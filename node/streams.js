const fs = require('fs');
const writeStream = fs.createWriteStream('./node/newfile.txt');

const readStream = fs.createReadStream('./node/largefile.txt');//created a read stream , told node where we're reading data from
readStream.on('data',(chunk) => { 
    console.log('-------NEW CHUNK-----------');
    console.log(chunk);
    //everytime we get a bunch of data we write it in the new file
    writeStream.write('\n---------------New chunk-----------------\n');
    writeStream.write(chunk)
});

//piping : it must be from a readable stream to a writable stream
readStream.pipe(writeStream);
