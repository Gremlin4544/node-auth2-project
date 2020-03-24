const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send("Qui Gon - Its working! Its working!");
});

module.exports = server;