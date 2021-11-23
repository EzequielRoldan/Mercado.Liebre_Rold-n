 const express = require('express')
const { dirname } = require('path/posix')
const app = express()
app.use(express.static('public'))
const port = 3000

app.listen (process.env.PORT ||3000, ()=>{
    console.log('Servidor funcionando bien');
});
app.get('/', (req, res) => {res.sendFile(__dirname + ('/views/Home.html'))})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
    });

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
    });
