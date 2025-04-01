//Import das bibliotecas para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Inicializando a utilização do express através da váriavel app
const app = express()

//request - Significa a chegada de dados na API
//response - Significa a saída de dados da API
app.use((request, response, next)=>{
    //Permissão de acesso para quem irá chamar a API
    response.header('Acess-Control-Allow-Origin', '*')
    //Permissão de acesso para quais métodos a API irá responder
    response.header('Acess-Control-Allow-Methods', 'GET')

    //Ativa as configurações do header para o cors()
    app.use(cors())


    next()
})

 //Import do arquivo funções
let Whatsapp = require('./funcoes.js')

//Endpoint para retornar os dados pessoais de um usuario com base no seu contato
app.get('/v1/whatsapp/dadosPessoais/:pessoal', cors(), async function(request, response){
    const contatoPessoal = request.params.pessoal
    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getDadosPessoaisUsuario(contatoPessoal)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})

//Endpoint para retornar os dados do profile de um usuario com base no seu contato
app.get('/v1/whatsapp/dadosProfile/:profile', cors(), async function(request, response){
    const contatoProfile = request.params.profile
    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getDadosProfileUsuario(contatoProfile)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})

//Endpoint para retornar os contatos de um usuario com base no seu contato
app.get('/v1/whatsapp/contatosUsuario/:contatos', cors(), async function(request, response){
    const contatosUsuario = request.params.contatos
    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getContatosUsuario(contatosUsuario)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})

//Endpoint para retornar as conversas de um usuario com base no seu contato
app.get('/v1/whatsapp/conversasUsuario/:conversas', cors(), async function(request, response){
    const conversasUsuario = request.params.conversas
    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getConversasUsuario(conversasUsuario)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})

//Endpoint para retornar as conversas de um usuario especifico com base no telefone do usuario e o nome de seu contato
app.get('/v1/whatsapp/conversasUsuarioEspec/filtro', cors(), async function(request, response){
    let telefoneUsuario = request.query.telefoneUsuario
    let contatoEspecifico = request.query.contatoEspecifico

    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getContatoEspecificoUsuario(telefoneUsuario, contatoEspecifico)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})

//Endpoint para retornar a conversa especifica do contato de um usuario com base em uma palavra chave
app.get('/v1/whatsapp/conversasPalavraChave/filtro', cors(), async function(request, response){
    let telefoneUsuario = request.query.telefoneUsuario
    let contatoEspecifico = request.query.contatoEspecifico
    let palavraChave = request.query.palavraChave

    //Chama a função que retorna todos os estados
    let dados = Whatsapp.getFiltroPalavraChave(telefoneUsuario, contatoEspecifico, palavraChave)

    //Resposta da API com o JSON e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar a lista de cursos'})
    }
})


//Executa a API e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})  

