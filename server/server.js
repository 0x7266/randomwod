const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { getWod } = require('./controllers/wodController.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    const data = getWod();
    res.json(data);
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});