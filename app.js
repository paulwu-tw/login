const express = require('express')
const hbs = require('express-handlebars')
// use express router
const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', hbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)



app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})