const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // parses data before it renders to page

app.use('/dist', express.static(path.resolve(__dirname, '../main')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.listen(PORT, () => {
  console.log(`WooperLooper is running on ${PORT}!`);
});

module.exports = app;