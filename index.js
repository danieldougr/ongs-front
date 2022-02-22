const express = require('express')
const consign = require('consign')
const bodyParser = require("body-parser");
const app = express()
var cors = require("cors");

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign()
    .include('controller')
    .into(app)
    
app.listen(8080, () => console.log('servidor rodando na porta 8080'))
