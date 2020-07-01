module.exports = function(sequelize, DataTypes) {
    var Wine = sequelize.define('Wine', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
      },
      taste: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
      },
      aroma: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          len: [1, 160]
        },
      }
    });
    
    return Wine;
  };