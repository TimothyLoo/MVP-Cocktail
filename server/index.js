require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
