const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/Home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
/*process.env.PORT para correrlo en el server" administra heroku un puerto"*/
