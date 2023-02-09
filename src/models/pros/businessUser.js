module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "businessUser",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type_of: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: "updated_date",
    }
  );
};
