module.exports = (connection, DataTypes) => {
    const schema = {
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      flat_number: DataTypes.STRING,
      email: DataTypes.STRING,
    };
  
    const TennantModel = connection.define('Tennant', schema);
    return TennantModel;
  };