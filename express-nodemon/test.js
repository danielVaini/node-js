const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


//Postagem

const Postagem = sequelize.define('postagens', {
  // Tabela

  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

// Inserir dados

Postagem.create({
  titulo: 'Titulo qualquer',
  conteudo: 'asdasdasdasdsa'
})

