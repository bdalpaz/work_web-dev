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

app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;
    const email = req.body.email;

    if (!nome || !idade || !email) return res.status(400).json({ erro: 'Nome, idade e email são obrigatórios' });

    const novo = { id: usuarios.length + 1, nome: nome, idade: idade, email: email };
    usuarios.push(novo);
    res.status(201).json(novo);
});


app.patch('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const { nome, idade, email } = req.body;
    if (nome !== undefined) usuario.nome = nome;
    if (idade !== undefined) usuario.idade = idade;
    if (email !== undefined) usuario.email = email;

    res.json(usuario);
});

 app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, age, email } = req.body;
    const userIndex = users.findIndex(u => u.id === userId);  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = { id: userId, name, age, email };
    users[userIndex] = updatedUser;
    return res.json(updatedUser);
  });

   app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId); 
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    users.splice(userIndex, 1);
    return res.status(204).send();
  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});