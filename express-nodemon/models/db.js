const Sequelize = require('sequelize').Sequelize;

// Connecting with database
const sequelize = new Sequelize('postapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}