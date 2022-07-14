const express = require('express');
const router = express.Router()
const Test = require('../models/test')

router.get('/',async (req, res) => {
    try{
        const tests = await Test.find();
        res.json(tests);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.get('/:id', (req, res) =>{
    res.send(req.params.id)
});

router.post('/',async (req, res) => {
    const test = new Test({
        first_name: req.body.first_name,
        last_name: req.body.last_name
    });
    try {
        const newTest = await test.save();
        res.status(201).json(newTest);

    }
    catch (err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;