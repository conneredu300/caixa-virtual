const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

app.use(cors());
app.use(express.json());

//DB SETTINGS
let uri = "mongodb+srv://eduardo_jose_luciano_junior:admin@cluster0-xqinj.mongodb.net/test?retryWrites=true&w=majority";

//uri = "mongodb://localhost:27017/nodeapi"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});


requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
    res.send("Bem vindo ao caixa virtual");
});

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});