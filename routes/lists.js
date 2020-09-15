const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.send('GET ALL LISTS')
    db.List.findAll()
        .then(lists => {
            // res.sendStatus(200);
            console.log(lists);
        })
        .catch(err => console.log('Error in get all lists', err))
});

module.exports = router;