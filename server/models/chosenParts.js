const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    ChosenParts: sequelize.define('chosen_parts', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },       
    })
}