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
        money: '200',
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
    },
    {
        brand: 'Fork',
        money: '399.99',
        categoryId: 3
    },
    {
        brand: 'super fork',
        money: '499.99',
        categoryId: 3
    },
    {
        brand: 'pedals',
        money: '99.99',
        categoryId: 4
    },
    {
        brand: 'Super Pedals',
        money: '299.99',
        categoryId: 4
    },
    {
        brand: 'sussy',
        money: '799.99',
        categoryId: 5
    },
    {
        brand: 'suspension',
        money: '479.99',
        categoryId: 5
    },
    {
        brand: 'Tires',
        money: '89.99',
        categoryId: 6
    },
    {
        brand: 'Big Tires',
        money: '119.99',
        categoryId: 6
    },
]

const seedDatabase = async () => {
    await Category.bulkCreate(categories)
    await Part.bulkCreate(parts)
}

module.exports = {
    seedDatabase
}