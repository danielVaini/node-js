const express = require('express');
const app = express();
const handlebars = require('express-handlebars');






// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



// Routes

app.get('/cad', (req, res) => {
  res.render('formulario')
})

app.post('/add', (req, res) => {
  req.body.conteudo
  res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
})

app.listen(3333, () => {
  console.log('Conected')
})