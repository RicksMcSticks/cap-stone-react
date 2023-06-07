const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Category: sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        categoryName: DataTypes.STRING,
    })
}