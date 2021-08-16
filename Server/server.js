const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const knex = require('knex');
const bcrypt = require('bcryptjs');

const pgDB = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'justinbuckner',
    password: '',
    database: 'recipedb'
  }
});


app.use(express.json()); // parses data before it renders to page
app.use(express.urlencoded({ extended: true }));
app.use('/dist', express.static(path.resolve(__dirname, '../main')))

pgDB.select('*').from('users').then(data => {
  console.log(data);
});




app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})



// route for login
app.post('/login', (req, res) => {
  // generate hash from user password
  const saltRounds = 7;
  const password = req.body.users[0];

  bcrypt.hash(plaintextpw, saltRounds, (err, hash) => {
    // store hash in password DB

    // check if password matches
    bcrypt.compare(plaintextpw, hash, (err, res) => {
      // if res = true
      // authenticate user
      // else
    });
  });
});


// save user email and hash in db for login

// authenticate user login with bcrypt compare using the hash generated
// if comparison is a match(true), log the user into the app
// else, return error message




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


app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  pgDB.select('*').from('users').where({
    id: id
  })
    .then(user => {
      if (user.length) res.status(200).json(user[0])
      else res.status(400).json('not found')
    })
})

app.listen(PORT, () => {
  console.log(`WooperLooper is running on ${PORT}!`);
});

module.exports = app;