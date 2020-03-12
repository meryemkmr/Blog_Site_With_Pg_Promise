const express = require('express');
let db = require('../models/database');
const router = express.Router();
const bodyParser = require('body-parser');



router.get('/editblogs', (req, res) => {
    db.query('SELECT * FROM categories')
    .then((results)=>{
        res.render('editblogs',{
            categories: results
        })
    })
    
})
router.use(bodyParser.urlencoded({extended: false}));
router.post('/editblogs',(req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let author = req.body.authors;
    let imageurl = req.body.imageurl;
    // let category = parseInt(req.body.category);
    let category = req.body.category;
    // let date = req.body.date
    // let summary = req.body.summary;
    

    
    db.none("INSERT INTO blogs (title, author,category ,body) VALUES ($1, $2, $3, $4)",
    [title, author,category ,body])
    .then(() => {
        res.redirect('/blogs')
        console.log(name);
    })

    .catch((error) => {
        res.send('error')
    });
})


module.exports = router;