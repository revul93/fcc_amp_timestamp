const express = require('express');
const timestamp = require('./timestamp');

const app = express();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/timestamp/:date?', (req, res) => {
    return res.json(timestamp(req.params.date));
});

app.listen(PORT, () => {
    console.log(`Server started on port http://${HOSTNAME}:${PORT}`);
});
