const xyz= require('./people');//we re importing this file to this file 
//console.log(xyz);//this is an empty object
//if i want to access to const people from this file
// after exporting the xyz contains now   "hello"4
//now the xyz object contains people and ages
console.log(xyz.people,xyz.ages);

// destructuring

const{people}= require('./people');//u can specify what to import and it should have the same exported key
console.log(people);

// node also has built in modules which we can require
const os = require('os');
console.log(os.platform(),os.homedir());
// the file system 
const fs = require('fs');

// reading files
fs.readFile('./node/amel.txt',(err,data) => {//it will take sometime but it won't stop the code rest of the code bcz it's asynchronous
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing files
fs.writeFile('./node/amel.txt',"hello i am amel and i am ui/ux designer",() => {
    console.log("file was written");
})
// with non existing file
fs.writeFile('./node/amelchedd.txt',"hello i am amel and i am ui/ux designer",() => {
    console.log("file was written");
})

//directories 
if (fs.existsSync('./assets')) {//we check if the dir exists
    fs.rmdir('./assets',(err) => {//if so delete it
        if (err) {
            console.log(err);
        }
        console.log("folder deleted")
    })
    
}else{
    fs.mkdir('./assets',(err) => {//if not create it 
        if (err) {
            console.log(err); 
        }
        console.log('folder created');
    })
}

//delete files 
if (fs.existsSync('./node/deleteme.txt')) {
    fs.unlink('./node/deleteme.txt',(err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
//this is cool but when it comes to large files it will take long time to read them => no efficiency
//with Streams  we can use data before it's fully been read

//go to streams file


