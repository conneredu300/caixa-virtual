const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(cors());
app.use(express.json());

//DB SETTINGS
mongoose.connect('mongodb://mongo:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
    res.send("Welcome to a basic express App");
});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});