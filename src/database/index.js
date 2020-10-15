const mongoose = require('mongoose')

// here mongo refers to the docker container inside docker-compose.yml
mongoose.connect('mongodb://mongo:27017/app', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(res => {
    module.exports = true
    console.log("Successfully connected to DataBase");
}).catch(e => {
    console.log("Unable to connect to DataBase");
})