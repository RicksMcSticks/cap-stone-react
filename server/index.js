require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env
const {sequelize} = require('./util/database')
const session = require('express-session')
const {seedDatabase} = require('./util/seed')
const {User} = require('./models/user.js')
const {Category} = require('./models/category')
const {ChosenParts} = require('./models/chosenparts')
const {Part} = require('./models/part')

User.hasMany(ChosenParts)
ChosenParts.belongsTo(User)

ChosenParts.hasMany(Part)
Part.belongsTo(ChosenParts)

Category.hasMany(Part)
Part.belongsTo(Category)

const {register, login, checkUser, logout} = require('./controllers/authController')


const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

app.post('/api/register', register)
app.post('/api/login', login)
// app.get('/api/user', checkUser)
app.post('/api/logout', logout)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())   
    .then(() => app.listen(SERVER_PORT, console.log(`chewi hit the hyper drive ${SERVER_PORT}!`)))
    .catch(err => console.log(err))