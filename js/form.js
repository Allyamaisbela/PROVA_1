let botaoAdicionar = document.querySelector('#adicionar-registro')
botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let registro = obterValoresDoForm(form)

    let erros = validaRegistro(registro)

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }

    adicionaRegistroNaTabela(registro)

    let mensagemErro = document.querySelector("#mensagens-erro")
    mensagemErro = ''
})

function adicionaRegistroNaTabela(_registro) {
    let registroTr = montarTr(registroTr)
    let tabela = document.querySelector('#tabela-registro')

    tabela.appendChild(registroTr)
}

function montarTr(registro) {
    let registroTr = document.createElement('tr')
    registro.classList.add('registroTr')

    registroTr.appendChild(montarTd(registro.nomedatarefa, 'info-nomedatarefa'))
    registroTr.appendChild(montarTd(registro.descricao, 'info-descricao'))
    registroTr.appendChild(montarTd(registro.propriedade, 'info-prioridade'))
    registroTr.appendChild(montarTd(registro.status, 'info-statusatual'))

    return registroTr
}

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function obterValoresDoForm(form) {
    let registro = {
        nomedatarefa: form.nomedatarefa.value,
        descricao: form.descricao.value,
        propriedade: form.propriedade.value,
        statusatual: form.statusatual.value,
    }
    return registro
}