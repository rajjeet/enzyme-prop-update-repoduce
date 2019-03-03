const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen('3000', () => {
    console.log('listening on port 3000');
});
