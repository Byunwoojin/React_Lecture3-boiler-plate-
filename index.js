const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://snowwoo:qaz7418308!@boilerplate.ztt9k.mongodb.net/<dbname>?retryWrites=true&w=majority'
    , { userNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false

    }).then(()=>console.log("MongoDB Connected"))
    .catch(err=> console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})