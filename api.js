const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let list_api = [];
app.use(bodyParser.json());

const port = process.env.PORT || 7000;
app.get('/about', (req, res) => {
  res.json({ name: 'trapti patel',course:'Btech CSE' });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/more', (req, res) => {
  res.json(list_api);
});
app.post('/more', (req, res) => {
  const new_list = req.body;
  list_api.push(new_list);
  res.status(201).json(new_list);
});