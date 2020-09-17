const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.send('GET ALL ITEMS')
    db.Item.findAll()
        .then(items => {
            items.forEach(item => {
                console.log(item.dataValues.name, item.dataValues.notes)
            })
        })
        .catch(err => console.log('Error in get all items', err))
});

module.exports = router;