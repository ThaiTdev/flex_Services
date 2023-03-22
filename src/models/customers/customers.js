module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "customer",
    {
      customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        defaultValue: false,
      },
      avatar: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      nom_user: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      adresse: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      curriculum_vitae: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      permis: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      valide: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      etat: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
};
