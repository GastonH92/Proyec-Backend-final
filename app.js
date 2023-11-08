const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routers/index')
const apiRouter = require('./routers/api')

const { connect } = require('./db/connects')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/index', indexRouter)
app.use('/v1', apiRouter)

connect()

module.exports = app
