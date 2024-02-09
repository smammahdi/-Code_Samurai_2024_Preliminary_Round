const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 8000;


app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send('Hello Wld');
})

app.get('/users', async (req, res) => {
    try{

    }catch(err){
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



