import {Router, Request, Response, response} from 'express'
import { request } from 'http'
import internal from 'stream'

const router = Router()

router.get('/',(req: Request,res: Response) =>{
    
    //let pessoa = {
        //nome:'Fulaninho',
        //idade:10
    //}
    res.render ('pages/home',{
        nome: "fulaninho",
        showWelcome: false 
    })
    

   // res.render('home',{
        //pessoa
    //})
})

//Criando a rota /contato e renderizar uma pagina 
router.get('/Contato',(req: Request,res: Response) =>{
    res.render('pages/contatos')
})

//Crinado a rota chamada idade e renderiza uma pagina 
router.get('/idade',(req: Request,res: Response) =>{
    let idade: number = 10
    let mostrarIdade: boolean = false 

    //usar o if aqui 
    if (idade >= 15){
        mostrarIdade = true
    } 
    
    res.render('pages/idade',{
        nome: "Ciclano",
        mostrarIdade,
        products:[
        /*'mouse',
        'Leite em pó',
        'desodorante',
        'Lustra Imoveis',
        'Sabão em pó'
        */
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

router.get('/name',(req: Request,res:Response) =>{
    let name: string = req.query.name as string
    res.render('pages/name', {
        name
    })
})

router.get('/formulario',(req: Request,res:Response) =>{
    let name: string = req.query.name as string 
    let telefone: string = req.query.telefone as string
    let idade: number = req.query.idade as unknown as number
    let endereco: string = req.query.endereco as string
    res.render('pages/formulario', {
        name,
        telefone,
        idade,
        endereco
    })
})

router.get('/conta', (req:Request,res:Response) =>{
    res.render("pages/conta")
})

router.post('/conta', (req: Request,res:Response) =>{

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let idade = 2023 - anoNascimento 
    
    res.render("pages/conta",{
       idade  
    })

})



//exportando o arquivo index 
export default router