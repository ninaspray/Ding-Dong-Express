module.exports = (connection, DataTypes) => {
 
   const schema = {
        size: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        picked_up: {
          type: DataTypes.STRING,
          allowNull: false,
        },
    };
  
    const PackageModel = connection.define('Package', schema);
    return PackageModel;
};