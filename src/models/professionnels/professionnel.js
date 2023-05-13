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
        unique: true,
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      nom_user: {
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
      fonction: {
        type: DataTypes.STRING,
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
