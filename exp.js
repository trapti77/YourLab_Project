const express = require('express');
const app = express();
PORT=5000
app.use(express.json());
app.get('/', (req, res) => {
    res.send("this is home page");
})
app.get('/about',
    (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

app.post('/about', (req, res) => {
    const { name, course } = req.body
    res.send({name,course});
})
app.get('/**', (req, res) => {
    res.send(" 404 not found");
})  
app.listen(PORT,() => {
    console.log("server started at port", PORT);
})