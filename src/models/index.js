const Sequelize = require('sequelize');
const TennantModel = require('./tennant');
const PackageModel = require('./package');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

//console.log(process.env);

const setupDatabase = () => {
  const connection = CLEARDB_DATABASE_URL ? getProdDB() : getLocalDB();
    
//console.log(connection);

    const Tennant = TennantModel(connection, Sequelize);
    const Package = PackageModel(connection, Sequelize);

  
    Package.hasOne(Tennant);
  
  
    connection.sync({ alter: true });
    return {
      Tennant,
      Package
    };
  };

  
  
  const getLocalDB = () => {
    return new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'mysql',
      logging: false,
    })
  }

  const getProdDB = () => {
    return new Sequelize(CLEARDB_DATABASE_URL);
  }


  module.exports = setupDatabase();