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
  pgDB.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
    .then(loginEntry => {
      // console.log(loginEntry)
      const isValid = bcrypt.compareSync(req.body.password, loginEntry[0].hash);
      console.log('is valid?', isValid)
      if (isValid) {
        return pgDB.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
            console.log('user0: ', user[0])
            console.log('email: ', req.body.email)
          })
          .catch(err => res.status(400).json('could not retrieve user'))
      } else {
        res.status(400).json('invalid login info')
      }
    })
    .catch(err => res.status(400).json('invalid login information'))
  // generate hash from user password
  // const saltRounds = 7;
  // console.log(req.body.password, 'req body password')
  // const password = req.body.password;

  // bcrypt.hash(password, saltRounds, (err, hash) => {
  //   // store hash in password DB

  //   // check if password matches
  //   bcrypt.compare(password, hash, (err, res) => {
  //     // if res = true
  //     // authenticate user
  //     // else
  //   });
  // });
});


// save user email and hash in db for login

// authenticate user login with bcrypt compare using the hash generated
// if comparison is a match(true), log the user into the app
// else, return error message




app.post('/signup', (req, res) => {
  const { email, name, password } = req.body;
  console.log('this is the email: ', email)
  // const newEmail = JSON.stringify(email)
  // console.log('newEmail: ', newEmail)
  const hash = bcrypt.hashSync(password);
  pgDB.transaction(trx => { // create a transaction, use trx obj to perform operations
    trx.insert({ // insert hash and email into login
      hash: hash,
      email: email
    })
      .into('login')
      .returning('email') // return promise to return the email
      .then(loginEmail => { // upon resolving email promise
        console.log('login email:', loginEmail)
        return trx('users') // return another transaction
          .returning('*')
          .insert({ // insert email, name, and joined date into users
            email: loginEmail[0],
            name: name,
            foodstyle: '',
            joined: new Date()
          })
          .then(user => {
            console.log('user', user)
            console.log('user at 0', user[0])
            res.json(user[0]);
          })
      })
      .then(trx.commit) // commit the changes to the db
      .catch(trx.rollback) // if failure, rollback the changes
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