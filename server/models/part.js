const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Part: sequelize.define('part', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        imageURL: DataTypes.TEXT,
        brand: DataTypes.STRING,
        money: DataTypes.STRING
        // imgUrl:
    })
}