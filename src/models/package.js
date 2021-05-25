module.exports = (connection, DataTypes) => {
 
   const schema = {
        size: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        notified: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        collected: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
          },
    };
  
    const PackageModel = connection.define('Package', schema);
    return PackageModel;
};