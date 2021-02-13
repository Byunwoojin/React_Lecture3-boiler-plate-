const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const{User}=require("./models/User");
const config = require('./config/key');

// application/x-222-from-urlencoded 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));

// application/json 분석해서 가져옴
app.use(bodyParser.json());


const mongoose=require('mongoose')
mongoose.connect(config.mongoURI
    , { userNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false

    }).then(()=>console.log("MongoDB Connected"))
    .catch(err=> console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! 새해복 많이 받으세요~')
})

app.post('/register',(req,res)=>{
    // 회원 가입 할때 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    // 정보가 user모델에 저장됨
    user.save((err,userInfo)=>{
        if(err)return res.json({success:false, err})
        return res.status(200).json({
            success: true
        })
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})