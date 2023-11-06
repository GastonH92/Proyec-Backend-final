const express = require('express')
const logger = require ('morgan')
const cors = require ('cors')
const Equipo = require('./models/Equipos');

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

const {connect} = require('./db/connects')

const indexRouter = require('./routers/index');
const apiRouter = require('./routers/api');
const apiControllers = require('./apiControllers');

app.use('/index', indexRouter);
app.use('/v3', apiRouter)

connect()

module.exports = app