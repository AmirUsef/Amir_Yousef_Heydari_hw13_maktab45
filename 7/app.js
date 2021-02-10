const express = require('express');
const app = express();
const path = require('path')
const about = require('./routes/about');
const contact = require('./routes/contact');
const cars = require('./routes/cars');

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "\\public\\index.html");
})

app.use('/about', about)
app.use('/contact', contact)
app.use('/cars', cars)

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})