//pegar os valore
//pegar a quantidade

function comprar() {
    let tipoIngresso = document.querySelector('#tipo-ingresso')
    let qtd = parseInt(document.querySelector ('#qtd').value)

    if (tipoIngresso.value == 'pista') {
       comprarPista(qtd); 
    } else 
        if (tipoIngresso.value == 'superior') {
            comprarSup(qtd);
        }
        else {
            comprarInf(qtd);

        }
       
    zerarCampo()
}




function comprarPista(qtd) {

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)

    if (qtd > qtdPista) { alert ('Quantidade indisponivel para pista')
     
    } else {
        qtdPista = qtdPista - qtd 
        document.getElementById('qtd-pista').textContent = qtdPista
        alert ('compra realizada com sucesso')
    }       
}

function comprarInf(qtd) {

    let qtdInf = parseInt(document.getElementById ('qtd-inferior').textContent)

    if (qtd > qtdInf) { alert ('Quantidade indisponivel para pista')
     
    } else {
        qtdInf = qtdInf - qtd 
        document.getElementById('qtd-inferior').textContent = qtdInf
        alert ('compra realizada com sucesso')
    }       
}


function comprarSup(qtd) {

    let qtdSup = parseInt(document.getElementById('qtd-superior').textContent)

    if (qtd > qtdSup) { alert ('Quantidade indisponivel para pista')
     
    } else {
        qtdSup = qtdSup - qtd 
        document.getElementById('qtd-superior').textContent = qtdSup
        alert ('compra realizada com sucesso')
    }       
}

function zerarCampo() {

    qtd.value = '0'
    
}