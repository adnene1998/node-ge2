//1. importations
const express = require('express')

//2. initialisations
const server = express()
// activer la format JSON 
server.use(express.json())

//3.traitements

server.get('/',(req,res)=>{
    res.send('Hello')
}
)
require('./apis.routes')(server)
//4.lancement du serveur
server.listen(3000)

