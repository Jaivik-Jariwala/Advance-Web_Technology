// app.js
const express = require('express');
const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');

app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
