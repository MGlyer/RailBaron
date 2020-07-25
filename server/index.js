const axios = require('axios');
const parser = require('body-parser');
const express = require('express');

const server = express();

server.use(parser.json());
server.use(express.static(`${__dirname}/../client/dist`));

const PORT = process.env.PORT || 808;
server.listen(PORT, () => {
  console.log(`now listening on http://localhost:${PORT}`)
})