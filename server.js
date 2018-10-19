const express = require('express')
const hbs = require('hbs')

const port = process.env.port || 3000

let app = express()
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
app.set('view engine', hbs)
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    // res.send('<h1>hello express!</h1>')
    res.render('home.hbs', {
        pageTitle: 'Home Page'
    })
})

app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page'
    })
})

app.listen(port)