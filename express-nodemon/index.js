const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize').Sequelize;




// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

  // Connecting with database
  const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

app.listen(3333,() => {
  console.log('Conected')
})