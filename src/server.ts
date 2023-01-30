import express from 'express'
import {Server} from 'http'
import path from 'path'
import mustache from 'mustache-express'
//importando as rotas
import mainRoutes from './routes/index'

//USAR O EXPRESS
const server = express()

server.set('view engine','mustache')

//usando as rotas
server.use(mainRoutes)

//criando a rota da PUBLIC
server.use(express.static(path.join(__dirname,'../public')))
//criando a rota para views
server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())


server.use((req,res) =>{
    res.status(404).send("Página não encontrada")
})

//gerando o servidor na porta 3000
server.listen(3000)
