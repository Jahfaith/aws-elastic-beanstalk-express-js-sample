const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome To My Page!\nI am a Data Scientist and DevOps Engineer.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
