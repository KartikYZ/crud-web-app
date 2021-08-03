const express = require('express');
const { urlencoded } = require('body-parser');
const app = express();

app.listen(3000, () => {
    console.log('listening on port: 3000')
});

// body-parser middleware 
app.use(urlencoded({ extended: true }));

// GET, POST, PUT, DELETE handlers
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/words', (req, res) => {
    console.log("POST request received.");
    console.log(req.body);
})