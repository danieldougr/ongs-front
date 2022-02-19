const express = require('express')
const consign = require('consign')

const app = express()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


consign()
    .include('controller')
    .into(app)
    
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
