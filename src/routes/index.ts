import {Router, Request, Response} from 'express'
import { request } from 'http'

const router = Router()

router.get('/',(req: Request,res: Response) =>{
    
    //let pessoa = {
        //nome:'Fulaninho',
        //idade:10
    //}
    res.render ('home',{
        nome: "fulaninho",
        showWelcome: false 
    })
    

   // res.render('home',{
        //pessoa
    //})
})

//Criando a rota /contato e renderizar uma pagina 
router.get('/Contato',(req: Request,res: Response) =>{
    res.render('contatos')
})

//Crinado a rota chamada idade e renderiza uma pagina 
router.get('/idade',(req: Request,res: Response) =>{
    let idade: number = 10
    let mostrarIdade: boolean = false 

    //usar o if aqui 
    if (idade >= 15){
        mostrarIdade = true
    } 
    
    res.render('idade',{
        nome: "Ciclano",
        mostrarIdade,
        products:[
        'mouse',
        'Leite em pó',
        'desodorante',
        'Lustra Imoveis',
        'Sabão em pó'
        ]
    })

})

router.get('/sobrenos',(req: Request,res:Response) =>{
    res.send("Página sobre nos")
})
//ROTA DINAMICA
router.get('/noticia/:slug',(req: Request,res:Response) =>{
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req,res) =>{
    let {origem, destino} = req.params

    res.send(`Procurando voos de ${origem} até ${destino}`)
})
//exportando o arquivo index 
export default router