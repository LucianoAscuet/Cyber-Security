const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
         },
        phone: {
            type: DataTypes.INTEGER,
        },
        userType: {
            type: DataTypes.ENUM("user", "staff"),
        },
    }, { timestamps: false })
}