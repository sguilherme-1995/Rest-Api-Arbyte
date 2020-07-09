const express = require('express')
const routes = require('./src/routes')
const app = express()
const port = process.env.PORT || 5555
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')// O asterisco é onde passa o dominio http
//     res.header(
//         'Access-Control-Allow-Header', 
//         'Origin, XRequested-With, Content-Type, Accept, Authorization',
        
//     );
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).send({})
//     }
//     next();

// })

app.use(routes)

app.listen(port , (err)=>{
    if(err){
        console.log('Deu ruim', err)
    }else{
        console.log('Servidor rodando, porta: ', port)
    }
    })

    app.use((error, req, res, next) => {
        res.status(error.status || 500)
        return res.send({
            erro: {
                menssagem: error.message
            }
        })
    })