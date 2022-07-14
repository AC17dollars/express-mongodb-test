require('dotenv').config()
const express = require('express');

const app = express();

const mongoose = require('mongoose');
const testRouter = require('./routes/test');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log("Connected to db"));

app.use('/test', testRouter);

app.listen(5000, ()=> console.log("Server started"));
