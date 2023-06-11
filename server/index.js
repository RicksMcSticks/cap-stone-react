require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env
const {sequelize} = require('./util/database')
const session = require('express-session')
const {seedDatabase} = require('./util/seed')
const {User} = require('./models/user.js')
const {Category} = require('./models/category')
const {ChosenParts} = require('./models/chosenParts')
const {Part} = require('./models/part')


User.hasMany(ChosenParts)
ChosenParts.belongsTo(User)

Part.hasMany(ChosenParts)
ChosenParts.belongsTo(Part)

Category.hasMany(Part)
Part.belongsTo(Category)

const {register, login, checkUser, logout} = require('./controllers/authController')
const {getParts, addPart, getUserParts} = require('./controllers/partsController')

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
app.post('/api/logout', logout)
app.post('/api/part', addPart)
app.get('/api/user', checkUser)
app.get('/api/parts', getParts)
app.get('/api/chosenparts/:userId', getUserParts)


sequelize.sync()
// sequelize.sync({force: true}).then(() => seedDatabase())   
    .then(() => app.listen(SERVER_PORT, console.log(`chewi hit the hyper drive ${SERVER_PORT}!`)))
    .catch(err => console.log(err))