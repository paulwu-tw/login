const express = require('express')
const router = express.Router()
// import middelware
const { authenticator } = require('../middleware/auth')

const home = require('./modules/home')
const users = require('./modules/users')

router.use('/', home)
router.use('/users', authenticator ,users)

module.exports = router
