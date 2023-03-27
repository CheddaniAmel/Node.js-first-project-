const http = require('http');

const _ = require("lodash");


//req object contains info about the request like url ect and  we use res object to send response the user in thr brsr
const server = http.createServer((req,res) => {//this call back function will run each time a request comes to our server
    console.log("request made");

    //lodash 
    const num = _.random(0,20);
    console.log(num);

    //this will run only once 

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();//won't execute


    let path = './node/views/';
switch (req.url) {
    case '/':
        path +='index.html' 
        res.statusCode  = 200;
        break;
    case '/about':
        path +='about.html' 
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301; 
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path+='404.html'
        res.statusCode  =404;
        break;
}
    //console.log(req);

    //THE response object --------------------------

    //set header content type 
    res.setHeader('content-Type','text/html');
    /*
    res.write("<p>hello,it's amel</p>");
    res.write('<p>a ui/ux designer</p>')
    res.end();
    */
    //send a htnl file as a response
    const fs = require('fs');
    fs.readFile(path,(err,data) => {
        if (err) {
            console.log(err);  
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })


});
server.listen(3000,'localhost',() => {
    console.log('listening for request on port 3000');
})
//Localhost and port Numbers 
//localhostis  like a domain name on the web 

//localhost -----> IP @ ------> own computer

//--------Port Numbers --------//
// are like doors into a computer 



