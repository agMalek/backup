const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')


app.use(express.static('public/cliente/dist'))

app.use(cors())

app.get('*', (req, res) =>{
    res.redirect('/')
})

app.get('/', (req, res) =>{
    res.send('OK NODE.js')
} )

app.get('/datos', (req, res) =>{
    res.send('OK NODE.js get datos')
} )


app.listen(port, err =>{
    if(err) throw new Error(`Error en servidor: ${err} `)
    console.log(`Servidor express escuchado en el puerto ${port}`)
})
