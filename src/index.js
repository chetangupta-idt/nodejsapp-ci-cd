const expres = require('express');
const api = require('./app') 

const app = expres();

const port = 80;

app.use(expres.json());

app.use('/', api);

app.listen(port, async()=>{
    try {
        console.log(`server started at http://localhost:${port}`);
    } catch (error) {
        console.error(error);
    }
})