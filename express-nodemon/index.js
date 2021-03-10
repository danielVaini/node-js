const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const Sequelize = require('sequelize').Sequelize;




// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  // Body parser
  app.use(express.urlencoded({extended: false}))
  app.use(express.json())
  
  // Connecting with database
  const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

// Routes

  app.get('/cad', (req,res) => {
    res.render('formulario')
  })

  app.post('/add', (req,res) => {
    res.send('FORMULARIO RECEBIDO')
  })

app.listen(3333,() => {
  console.log('Conected')
})