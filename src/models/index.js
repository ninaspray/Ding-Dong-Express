const Sequelize = require('sequelize');
const TennantModel = require('./tennant');
const PackageModel = require('./package');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

const setupDatabase = () => {
    const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'mysql',
      logging: false,
    });

    const Tennant = TennantModel(connection, Sequelize);
    const Package = PackageModel(connection, Sequelize);

    Package.belongsTo(Tennant, {as: 'package'});
    Tennant.hasMany(Package);
  
    connection.sync({ alter: true });
    return {
      Tennant,
      Package
    };
  };
  
  module.exports = setupDatabase();