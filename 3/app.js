const express = require('express');
const app = express();
const user = require('./routes/user');

app.use('/user', user)

app.listen(5005, () => {
    console.log("server is running on port 5005 ...");
})