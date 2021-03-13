const Sequelize = require('sequelize').Sequelize;

// Connecting with database
const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});