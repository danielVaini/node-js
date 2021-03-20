const express = require('express');
const app = express();


// Olá 
app.get('/', (req, res) => {
  res.send('Hello worlld')
})

app.get('/sobre', (req, res) => {
  res.send('Minha pagina sobre')
})

app.get('/blog', (req, res) => {
  res.send('Bem vindo ao meu blog')
})

app.listen(3333,() => {
  console.log('Conected')
  
})