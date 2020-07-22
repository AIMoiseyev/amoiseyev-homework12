const express = require('express');

const path = require('path');
const users = require('./data/users.json');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/users', (req, res) => {
  console.log(res.send(users[req.query.users]));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
