const express = require('express');

//express app
const app = express();

//register view engine 
app.set('views', __dirname + '/views/myviews');
app.set('view engine','ejs');

//app.set('views','myviews');//express would know where to find my views


//listen for requests
app.listen(3000)

app.get('/',(req,res) => {
    //res.send('<p>home page</p>')
    //res.sendFile('./views/index.html',{root: __dirname});
    res.render('index');
});

app.get('/about',(req,res) => {
    //res.send('<p>about page</p>')
    res.render('about');
});

//Redirects 

app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

//404 page
app.use((req,res) => {
    //res.status(404).sendFile('./views/404.html',{root: __dirname}); 
    res.status(404).render('404');
})
