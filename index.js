const express = require('express');
const timestamp = require('./timestamp');
const cors = require('cors');
const app = express();

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/api/timestamp/:date?', (req, res) => {
    return res.json(timestamp(req.params.date));
});

app.listen(PORT, () => {
    console.log(`Server started on port http://${HOSTNAME}:${PORT}`);
});
