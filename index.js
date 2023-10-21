const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const app = express()
const path = require('path')

mongoose.connect("mongodb://0.0.0.0:27017/MVStudio")
const db = mongoose.connection

db.on('open',()=>{
    console.log("Conneted to database!!")
})

app.set('view engine','ejs')
app.set('views', path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

const prout = require('./routers/proutes')
app.use('/data', prout)

app.listen(8000,()=>{
    console.log("Server listing on 8000..!!")
})