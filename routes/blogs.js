const express = require('express');
const db = require('../models/database');
const router = express.Router();



router.get('/blogs', (req, res) => {
    db.query('SELECT * FROM blogs')
        .then((results) => {
            //results is an array of objects
            res.render('blogs', {
                categories: results
            })
        })
    // res.render('dishes')
})




module.exports = router;