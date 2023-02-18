module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "restaurateurs",
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
      nom_user: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      fonction: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      valide: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      etat: {
        type: DataTypes.BOOLEAN,
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
