const express = require('express');
const app = express();
const pages = require('./routes/pages');

app.use('/pages', pages)

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})