const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const knex = require('knex');

const pgDB = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'justinbuckner',
    password: '',
    database: 'recipedb'
  }
});

pgDB.select('*').from('users').then(data => {
  console.log(data);
});



app.use(express.json()); // parses data before it renders to page

app.use('/dist', express.static(path.resolve(__dirname, '../main')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  pgDB.select('*').from('users').where({
    id: id
  })
    .then(user => {
      if (user.length) res.json(user[0])
      else res.status(400).json('not found')
    })
})

app.post('/signup', (req, res) => {
  const { email, name, password } = req.body;
  pgDB('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json('invalid registration'))
})

app.listen(PORT, () => {
  console.log(`WooperLooper is running on ${PORT}!`);
});

module.exports = app;