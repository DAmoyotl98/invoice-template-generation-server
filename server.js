const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db')

const uri = "mongodb+srv://user_andrea:2900598@v-queue.tfxhv.mongodb.net/v-queue?retryWrites=true&w=majority"
db (uri)
const router = require('./network/routes')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false  }))
app.use(cors());

router(app);


app.listen(3000);
console.log("La aplicación esta escuchando en http://localhost:3000");