"use strict"

let dadosConversas = []

async function buscarContatos() {
    const response = await fetch("http://localhost:8080/v1/whatsapp/contatosUsuario/11966578996")
    return await response.json()
}

async function buscarConversas() {
    const response = await fetch("http://localhost:8080/v1/whatsapp/conversasUsuario/11966578996")
    return await response.json()
}

function montarMensagemHTML(mensagens) {
    const container = document.querySelector('.conversaContato')
    container.replaceChildren("")

    mensagens.forEach(msg => {
        const div = document.createElement('div')
        div.classList.add(msg.sender === 'me' ? 'mensagem-enviada' : 'mensagem-recebida')

        const conteudoMensagem = document.createElement('div')
        conteudoMensagem.classList.add('conteudoMensagem')

        const pMensagem = document.createElement('p')
        pMensagem.textContent = msg.content

        const timeHorario = document.createElement('time')
        timeHorario.textContent = msg.time

        conteudoMensagem.appendChild(pMensagem)
        conteudoMensagem.appendChild(timeHorario)

        div.appendChild(conteudoMensagem)

        container.appendChild(div)
    })
}

function criarContato(contato, mensagens) {
    const contatoDiv = document.createElement('div')
    contatoDiv.className = 'contato'

    const divDados = document.createElement('div')
    divDados.className = 'dadosContato'

    const img = document.createElement('img')
    img.src = "../img/placeholder.png"

    const texto = document.createElement('div')
    texto.className = 'textoContato'

    const h2 = document.createElement('h2')
    h2.textContent = contato.Nome || contato.nome

    const ultimaMsg = mensagens?.mensagens?.[mensagens.mensagens.length - 1]

    const h3 = document.createElement('h3')
    h3.textContent = ultimaMsg ? ultimaMsg.content : ''

    const span = document.createElement('span')
    span.textContent = ultimaMsg ? ultimaMsg.time : ''

    texto.appendChild(h2)
    texto.appendChild(h3)

    divDados.appendChild(img)
    divDados.appendChild(texto)

    contatoDiv.appendChild(divDados)
    contatoDiv.appendChild(span)

    contatoDiv.addEventListener('click', () => {
        document.querySelectorAll('.contato').forEach(c => c.classList.remove('selecionado'))
        contatoDiv.classList.add('selecionado')

        const headerContato = document.querySelector('.contatoConversa')
        const nomeHeader = headerContato.querySelector('h1')
        const imgHeader = headerContato.querySelector('img')

        nomeHeader.textContent = contato.Nome || contato.nome
        imgHeader.src = "../img/placeholder.png"

        montarMensagemHTML(mensagens.mensagens)
    })

    return contatoDiv
}

async function apresentarContatos() {
    const listaContatos = document.getElementById("listaContatos")
    listaContatos.replaceChildren("")

    const contatos = await buscarContatos()
    dadosConversas = await buscarConversas()

    contatos.forEach((contato, i) => {
        const conversa = dadosConversas.find(c => c.nome === contato.Nome)
        const contatoHTML = criarContato(contato, conversa)
        listaContatos.appendChild(contatoHTML)

        if (i < contatos.length - 1) {
            const separador = document.createElement('hr')
            listaContatos.appendChild(separador)
        }
    })
}

apresentarContatos()
