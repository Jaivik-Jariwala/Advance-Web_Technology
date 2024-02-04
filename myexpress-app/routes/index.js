// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, Express!');
});

router.get('/about', (req, res) => {
    res.send('About Us');
});

router.get('/dynamic', (req, res) => {
    res.render('dynamic', { message: 'Dynamic Content' });
});

module.exports = router;
