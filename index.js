const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    res.send('Genius Car Server Running');
})

app.listen(port, () => {
    console.log(`Genius car server running at ${port}`);
})