const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 5555

app.use(routes)

app.listen(port , (err)=>{
    if(err){
        console.log('Deu ruim', err)
    }else{
        console.log('Servidor rodando, porta: ', port)
    }
    })