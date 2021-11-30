const { config } = require('dotenv');
const express = require('express');
const dotEnv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Hello how are you");
});

app.get('/contact',(req,res) => {
   res.send(`Hello visit ${process.env.URL}`);
});

app.get('/home',(req,res) => {
   res.send("My name is hulu");
});

app.get('/digi',(req,res) => {
   res.send("My name is digi");
});

app.listen(port,() => console.log(`Server is running on ${port}`));