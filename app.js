
// Imports
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About'})
})

app.get('/sitemap.xml', function(req, res) {
    res.sendFile(__dirname+'/sitemap.xml');
});

app.listen(port, () => console.info(`App listening on port ${port}`))
