require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes');
const user = require('./routes/user');
const unitRating = require('./routes/unitRating');



app.use('/api', routes);
app.use('/api/user', user);
app.use('/api/rating', unitRating);

module.exports = app;