const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose")
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
dotenv.config()

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })

routes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server is listening on port: ' + port)
})