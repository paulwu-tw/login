const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

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


module.exports = app => {
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        const user = users.find(user => user.email === email && user.password === password)
        if (!user) {
            return done(null, false, { message: 'Incorrect email or password.' })
        }
        return done(null, user)
    }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.email)
    })
    passport.deserializeUser((id, done) => {
        const user = users.find(user => user.email === id)
        done(null, user)
    })
}