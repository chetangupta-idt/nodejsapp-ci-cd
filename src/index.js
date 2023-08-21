const express = require('express');
const api = require('./app');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', api);

app.listen(port, ()=> {
    try {
        console.log(`Server started at http://localhost:${port}`);
    } catch (error) {
        console.error(error);
    }
})