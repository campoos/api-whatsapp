var listaZAP = require('./contatos.js')

const getDadosPessoaisUsuario = function(filtroUsuario){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    let guardarDados = []
    let filtroUsuarioLocal = filtroUsuario

    while (contador < dadosBusca.length){


        if (filtroUsuarioLocal == dadosBusca[contador].number){
            status = true
            guardarDados.push(
                {
                    ID: dadosBusca[contador].id,
                    Conta: dadosBusca[contador].account,
                    Criação: dadosBusca[contador]['created-since'],
                    Numero: dadosBusca[contador].number,
                    Contatos: dadosBusca[contador].contacts
                }
            )
        }
        contador ++
    }

    if (status == true){
        return (guardarDados)
    }else {
        return status
    }
}  

const getDadosProfileUsuario = function(filtroUsuario){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    let guardarDados = []
    let filtroUsuarioLocal = filtroUsuario

    while (contador < dadosBusca.length){
        if (filtroUsuarioLocal == dadosBusca[contador].number){
            status = true
            guardarDados.push(
                {
                    Apelido: dadosBusca[contador].nickname,
                    FotoPerfil: dadosBusca[contador]['profile-image'],
                    Numero: dadosBusca[contador].number,
                    TelaFundo: dadosBusca[contador].background
                }
            )
        }
        contador ++
    }

    if (status === true){
        return (guardarDados)
    }else {
        return status
    }


}  

const getContatosUsuario = function(filtroUsuario){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    guardarDadosUsuario = []
    let guardarContatos = []
    let guardarDadosContatos = []
    let guardarTudo = []
    let filtroUsuarioLocal = filtroUsuario

    while (contador < dadosBusca.length){
        if (filtroUsuarioLocal == dadosBusca[contador].number){
            
            guardarDadosUsuario.push(
                {
                    ID: dadosBusca[contador].id,
                    Conta: dadosBusca[contador].account,
                    Criação: dadosBusca[contador]['created-since'],
                    Numero: dadosBusca[contador].number,

                    Apelido: dadosBusca[contador].nickname,
                    FotoPerfil: dadosBusca[contador]['profile-image'],
                    Numero: dadosBusca[contador].number,
                    TelaFundo: dadosBusca[contador].background
                }
            )

            status = true
            guardarContatos = dadosBusca[contador].contacts;
            break;
        }
        contador ++
    }

    contadorContatos = 0
    while (contadorContatos < guardarContatos.length) {
        guardarDadosContatos.push({
            Nome: guardarContatos[contadorContatos].name,     
            Descrição: guardarContatos[contadorContatos].description,
            Imagem: guardarContatos[contadorContatos].image
        })
        contadorContatos ++
    }

    guardarTudo.push(
        guardarDadosUsuario,
        guardarDadosContatos
    )

    if (status == true){
        return guardarTudo
    }else {
        return status
    }
}  

const getConversasUsuario = function(filtroUsuario){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    let guardarMensagens = []
    let filtroUsuarioLocal = filtroUsuario

    while (contador < dadosBusca.length){
        if (filtroUsuarioLocal == dadosBusca[contador].number){
            status = true
            
            let contatos = dadosBusca[contador].contacts
            let contadorMensagens = 0

            while (contadorMensagens < contatos.length){
                guardarMensagens.push(
                    {
                        nome: contatos[contadorMensagens].name,
                        descricao: contatos[contadorMensagens].description,
                        Imagem: contatos[contadorMensagens].image,
                        mensagens: contatos[contadorMensagens].messages
                    }
                )
                contadorMensagens ++
            }
        }     
        contador ++
    }

    if (status == true){
        return guardarMensagens
    }else {
        return status
    }

}  

const getContatoEspecificoUsuario = function(filtroUsuario, filtroContato){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    let guardarMensagens = []
    let guardarDadosUsuario = []
    let guardarTodosDados = []
    let filtroUsuarioLocal = filtroUsuario
    let filtroContatoLocal = filtroContato

    while (contador < dadosBusca.length){
        if (filtroUsuarioLocal == dadosBusca[contador].number){
            status = true
            guardarDadosUsuario.push(
                {
                    ID: dadosBusca[contador].id,
                    Conta: dadosBusca[contador].account,
                    Apelido: dadosBusca[contador].nickname,
                    Criação: dadosBusca[contador]['created-since'],
                    FotoPerfil: dadosBusca[contador]['profile-image'],
                    Numero: dadosBusca[contador].number,
                    Contatos: dadosBusca[contador].contacts
                }
            )

            let contatos = dadosBusca[contador].contacts
            let contadorMensagens = 0

            while (contadorMensagens < contatos.length){

                if (filtroContatoLocal == contatos[contadorMensagens].name)
                guardarMensagens.push(
                    {
                        nome: contatos[contadorMensagens].name,
                        descricao: contatos[contadorMensagens].description,
                        Imagem: contatos[contadorMensagens].image,
                        mensagens: contatos[contadorMensagens].messages
                    }
                )
                contadorMensagens ++
            }
        }     
        contador ++
    }

    
    guardarTodosDados.push(
        guardarDadosUsuario,
        guardarMensagens
    )

    if (status == true){
        return guardarTodosDados
    }else {
        return status
    }

}  

const getFiltroPalavraChave = function(filtroUsuario, filtroContato, filtroPalavra){
    contador = 0
    let status = false 
    let dadosBusca = listaZAP.contatos['whats-users']
    let guardarDadosMensagens = []
    let guardarDadosUsuario = []
    let guardarTodosDados = []
    let filtroUsuarioLocal = filtroUsuario
    let filtroContatoLocal = filtroContato

    while (contador < dadosBusca.length){

        if (filtroUsuarioLocal == dadosBusca[contador].number){
            status = true
            guardarDadosUsuario.push(
                {
                    ID: dadosBusca[contador].id,
                    Conta: dadosBusca[contador].account,
                    Apelido: dadosBusca[contador].nickname,
                    Criação: dadosBusca[contador]['created-since'],
                    FotoPerfil: dadosBusca[contador]['profile-image'],
                    Numero: dadosBusca[contador].number
                }
            )

            let contatos = dadosBusca[contador].contacts
            let contadorMensagens = 0

            while (contadorMensagens < contatos.length){

                if (filtroContatoLocal == contatos[contadorMensagens].name)
                guardarDadosMensagens.push(
                    {
                        nome: contatos[contadorMensagens].name,
                        descricao: contatos[contadorMensagens].description,
                        Imagem: contatos[contadorMensagens].image,
                        mensagens: contatos[contadorMensagens].messages
                    }
                )
                contadorMensagens ++
            }
        }     
        contador ++
    }

    if (!status) {
        return false;
    }

    let guardarPalavraChave = []
    let mensagens = guardarDadosMensagens[0].mensagens
    for (i = 0; i < mensagens.length; i ++){
        if (mensagens[i].content.includes(filtroPalavra)){
            guardarPalavraChave.push({
                Remetente: mensagens[i].sender,
                Conteudo: mensagens[i].content,
                Horário: mensagens[i].time
            })
        }

    }

    guardarTodosDados.push({
        Usuario: guardarDadosUsuario,
        Mensagens: guardarDadosMensagens,
        MensagensPalavraChave: guardarPalavraChave
    })

    if (status == true) {
        return guardarTodosDados
    }else {
        return status
    }

}  


// console.log(getDadosPessoaisUsuario('11966578996'))
// console.log(getDadosProfileUsuario('11966578996'))
// console.log(getContatosUsuario('11966578996'))
// console.log(getConversasUsuario('11966578996'))
// console.log(getContatoEspecificoUsuario('11966578996', 'José Maria da Silva'))
// console.log(getFiltroPalavraChave('11966578996', 'José Maria da Silva', 'doing'))

module.exports = {
    getDadosPessoaisUsuario,
    getDadosProfileUsuario,
    getContatosUsuario,
    getConversasUsuario,
    getContatoEspecificoUsuario,
    getFiltroPalavraChave
}

