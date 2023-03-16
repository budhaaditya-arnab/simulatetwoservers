const express = require('express')
const cors = require('cors')
const { readUserInput } = require('./server1.controller')
const { executeCode } = require('./server2.controller')



server=express()
server2=express()
server.use(cors())
server2.use(cors())

server.use(express.json())
server2.use(express.json())

server.get('/',(req,res)=>res.send({"server":"3001","name":"server1","health":"ok"}))
server.get('/readuserinput', readUserInput)
server2.get('/',(req,res)=>res.send({"server":"3002","name":"server2","health":"ok"}))
server2.post('/executecode', executeCode)

server.listen(3001, () => {
    console.log(`Server running on port 3001`)
  })
server2.listen(3002, () => {
    console.log(`Server running on port 3002`)
  })