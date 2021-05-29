module.exports = (connection, DataTypes) => {
 
   const schema = {
        size: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        notified: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
        collected: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
    };
  
    const PackageModel = connection.define('Package', schema);
    return PackageModel;
};