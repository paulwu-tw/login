const express = require('express')
const router = express.Router()

const users = [
    {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => {
    const {email, password} = req.body
    const user = users.find(user => user.email === email && user.password === password)
    if (user) {
        res.render('welcome', { firstName: user.firstName })
    } else {
        res.render('index', { email, password, message: 'Email or Password not correct!' })
    }
})

module.exports = router