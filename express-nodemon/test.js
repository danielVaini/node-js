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

// Postagem.create({
//   titulo: 'Titulo qualquer',
//   conteudo: 'asdasdasdasdsa'
// })

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  }
})

// Usuario.sync({force: true})

// Inserir dados na tabela Usuarios

Usuario.create({
  nome: 'Daniel',
  sobrenome: 'Santos',
  idade: 20,
  email: 'dnl@santos.com'
})