const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const bodyParser = require('body-parser')
dotenv.config()

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json())

routes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})



mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log('Sever is listening on port: ', + port)
})

