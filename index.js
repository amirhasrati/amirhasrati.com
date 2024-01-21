// Require express
const express = require('express');
const app = express();
const path = require('path');

// Serve the contents of the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Routes
app.get('/', (req, res) => {
    res.redirect('/home');
})

// Home page
app.get('/home', (req, res) => {
    res.render('home');
})

// Roadmap
app.get('/roadmap', (req, res) => {
    res.render('roadmap');
})


// Port
app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})