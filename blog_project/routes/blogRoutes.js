const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();





router.get('/blog',(req,res) => {
    Blog.find().sort({createdAt: -1 })
    .then((result) => {
        res.render('blog',{ title: 'All blogs',blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
});

router.post('/blogs',(req,res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
        res.redirect('/blog');
    })
    .catch((err) => {
        console.log(err);
    })
}) 



router.get('/blog/:id',(req,res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('details',{blog: result , title: 'Blog details'});
    })
    .catch((err) => {
        res.status(404).render('404',{ title: '404' });
    })
});

router.delete('/blog/:id',(req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect : '/blog'});
    })
    .catch((err) => {
        console.log(err);
    })
});

router.get('/create',(req,res) => {
    res.render('create',{ title: 'Create a new blog' });
});

module.exports = router;
