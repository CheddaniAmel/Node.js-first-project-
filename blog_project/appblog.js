const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

//connect to mongo db
const dbURI = "mongodb+srv://amelmima:amel234@cluster0.yqsp4bs.mongodb.net/amelblogs?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then((result) =>
//listen for requests (after connecting to db)
app.listen(3000))
.catch((err)=>console.log(err));

//register view engine 
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//middleware and static files 
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({extended: true}));




/*creating a middleware
app.use((req,res,next) => {
    console.log('new request made : ');
    console.log('host  :', req.hostname);
    console.log('path  :', req.path);
    console.log('method:', req.method);
    next()//move to the next middleware
});
*/


//use a third party middle ware : lik morgan

app.use(morgan('dev'));

//blog routes
app.use(blogRoutes);
//app.use('/blogs',blogRoutes)//now we don't need to specify /blog in every handler 


app.get('/',(req,res) => {
    res.render('index',{ title: 'Home' });
});

app.get('/about',(req,res) => {
    res.render('about',{ title: 'About' });
});


//404 page
app.use((req,res) => {
    res.status(404).render('404',{ title: '404' });
});


app.get("/search/:key",(req,res) => {
    res.send("search done");
})