const {sequelize} = require('./database')
const {Category} = require ('../models/category')
const {Part} = require('../models/part')

const categories = [
    {
        categoryName: 'Bars'
    },
    {
        categoryName: 'Body'
    },
    {
        categoryName: 'Fork'
    },
    {
        categoryName: 'Pedals'
    },
    {
        categoryName: 'Suspension'
    },
    {
        categoryName: 'Tires'
    },
]
const parts = [
    {
       brand: 'Deity',
       money: '100',
        categoryId: 1
    },
    {
        brand: 'ProTaper',
        money: '',
        categoryId: 1
    },
    {
        brand: 'YETI',
        money: '3000',
        categoryId: 2
    },
    {
        brand: 'Trek',
        money: '2,399.99',
        categoryId: 2
    }
]

const seedDatabase = async () => {
    await Category.bulkCreate(categories)
    await Part.bulkCreate(parts)
}

module.exports = {
    seedDatabase
}