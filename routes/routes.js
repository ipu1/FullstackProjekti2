const express = require('express');
const Model = require('../models/model');
const router = express.Router();

//Post
router.post('/post', async (req, res) => {
    const data = new Model({
        _id: 1,
        name: "Mikko",
        email: "mikko@gmail.com",
        password: "password1"
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Read All
router.get('/read', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
        console.log(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Read
router.get('/read/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;