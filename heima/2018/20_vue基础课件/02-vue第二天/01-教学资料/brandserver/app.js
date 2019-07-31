const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  // 允许请求的源
  res.setHeader('Access-Control-Allow-Origin', "*")
  // 允许请求的方法
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  // 允许所有的头
  res.setHeader("Access-Control-Allow-Headers", "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type")
  next()
})

app.use(router)

app.listen(9999, () => {
  console.log('你的服务端已经上线了')
})