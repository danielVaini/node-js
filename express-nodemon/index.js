const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Config
  // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

app.listen(3333,() => {
  console.log('Conected')
})