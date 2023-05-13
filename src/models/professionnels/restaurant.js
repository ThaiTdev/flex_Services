module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "restaurants",
    {
      restaurant_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      nom_restaurant: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      image_resto: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      adresse: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      siret: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
};
