const expres = require('express');
const api = require('./app') 

const app = expres();

const port = process.env.PORT || 3000;

app.use(expres.json());

app.use('/', api);

app.listen(port, ()=>{
    try {
        console.log(`server started at http://localhost:${port}`);
    } catch (error) {
        console.error(error);
    }
})