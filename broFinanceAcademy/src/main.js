function tipoOperacao() {
    const transacao = document.getElementById('sl_tipo_transacao').value
    const descricao = document.getElementById('txt_descricao').value
    const valor = document.getElementById('txt_valor').valueAsNumber



    if (transacao != "" && descricao != "" && valor > 0) {
        realizaOperacao(transacao, descricao, valor)
    }
    

}

function realizaOperacao(transacao, descricao, valor) {
    const icones = {
        entrada: '<i class="bi bi-arrow-up-circle"></i>',
        saida: '<i class="bi bi-arrow-down-circle"></i>',
    }

    const novosValores = {
        total: "",
        valorOperacao: ""

    }

    let iconeHTML = ""

    const valoresPaineis = {
        entrada: document.getElementById("valor_entrada").innerText,
        saida: document.getElementById("valor_saida").innerText,
        total: document.getElementById("valor_total").innerText
    }


    if (transacao == "entrada") {
        novosValores.valorOperacao = valor + Number(valoresPaineis.entrada)

        novosValores.total = valor + Number(valoresPaineis.total)

        document.getElementById("valor_entrada").innerText = novosValores.valorOperacao

        iconeHTML = icones.entrada

    } else {
        novosValores.valorOperacao = Number(valoresPaineis.saida) + valor

        novosValores.total = Number(valoresPaineis.total) - valor

        document.getElementById("valor_saida").innerText = novosValores.valorOperacao

        iconeHTML = icones.saida


    }

    document.getElementById("valor_total").innerText = novosValores.total


    const html = `
    <div class="registro">
        <div class="linha">
            <span id="tipo">
                ${iconeHTML}
            </span>
        </div>

        <div class="linha">
            <span id="descricao">
                ${descricao}
            </span>
        </div>

        <div class="linha">
            <span id="valor">
                ${valor}
            </span>
        </div>

        <div class="linha">
            <span id="data">
                ${dataAtualLinhafunc()}
            </span>
        </div>

    </div>
    `

 document.querySelector("#lista_transacoes").innerHTML += html

}

function dataAtualLinhafunc() {
    const data = new Date()
    const diaLinha = String(data.getDate()).padStart(2, '0')
    const mesLinha = String(data.getMonth() + 1).padStart(2, '0')
    const anoLinha = data.getFullYear()

    const dataAtualLinha = `${diaLinha}/${mesLinha}/${anoLinha}`

    return dataAtualLinha


}









