const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'Alice Dal Paz', age: 19, email: 'alice@gmail.com' },
    { id: 2, name: 'Gabriel Ferri', age: 20, email: 'gabriel@gmail.com' },
];

app.get('/users', (req, res) => {
    return res.json(users);
});

app.get('/', (req, res) => {
  res.send('Oláaaaa World!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});