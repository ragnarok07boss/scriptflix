const express = require('express');
const router = express.Router();

let scripts = []; // Array to hold our scripts

// POST endpoint to create a new script
router.post('/scripts', (req, res) => {
    const newScript = req.body;
    scripts.push(newScript);
    res.status(201).json(newScript);
});

// GET endpoint to list all scripts
router.get('/scripts', (req, res) => {
    res.status(200).json(scripts);
});

// GET endpoint to get a script by id
router.get('/scripts/:id', (req, res) => {
    const scriptId = req.params.id;
    const script = scripts.find(s => s.id === scriptId);
    if (script) {
        res.status(200).json(script);
    } else {
        res.status(404).json({ message: 'Script not found' });
    }
});

module.exports = router;
