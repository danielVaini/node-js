const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const Post = require('./models/Post');

// Config
  // Template Engine
  app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
  app.set('view engine', 'handlebars')
  // Body parser
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())



// Routes

  app.get('/',(req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
      res.render('home', {
        post: posts
      });

    })
  })

  app.get('/cad', (req, res) => {
    res.render('formulario')
  })

  app.post('/add', (req, res) => {

    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(()=> {
      res.redirect('/')
    }).catch((err) => {
      res.send('Error: '+err)
    })
   
    // res.send(`Texto: ${req.body.titulo} Conteudo: ${req.body.conteudo}`)
  })


  app.get('/deletar/:id',(req,res) => {
    Post.destroy({where: {
      'id': req.params.id,
    }}).then(() => {
      res.send('Post deleting whit sucess')
    }).catch((err) => {
      res.send('This post is not exist')
      
    })
  })

  app.listen(3333, () => {
    console.log('Conected')
  })