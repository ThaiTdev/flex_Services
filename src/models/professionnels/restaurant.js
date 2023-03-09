module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "restaurant",
    {
      pro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      restaurant_id: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      nom_entreprise: {
        type: DataTypes.STRING,
        defaultValue: false,
        // unique: true,
      },
      adresse: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      siret: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      taille: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      activite: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      logo: {
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
