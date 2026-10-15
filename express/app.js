import express from 'express';
import home,{about} from './home.js';
import {check} from './check.js';

const app = express();

app.get('/',(req,res)=>{
    res.send(home());
});
app.get('/about',(req,res)=>{
    res.send(about());
});
app.use((req,res)=>{
    res.status(404).send(check());
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});