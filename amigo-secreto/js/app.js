let arrAmigo = []

let form = document.querySelector('.form')


function adicionar() {

    let nomesAmigos = document.querySelector('#nome-amigo').value
    arrAmigo.push(nomesAmigos);
    console.log(arrAmigo)
    let listaAmigos = document.querySelector('#lista-amigos')
    listaAmigos.textContent = `${arrAmigo}`
    limparCampo()
}


function reiniciar() {
    let listaAmigos = document.querySelector('#lista-amigos')
    listaAmigos.textContent = ""
    arrAmigo = []
    console.log(arrAmigo)  
    let listaSorteio = document.querySelector ('#lista-sorteio');
    listaSorteio.textContent = "" 
}


function sortear() {
    embaralha(arrAmigo);
    let listaSorteio = document.querySelector ('#lista-sorteio');

    for (let i = 0; i < arrAmigo.length; i++) {

        if (i == arrAmigo.length - 1) {

            listaSorteio.innerHTML = listaSorteio.innerHTML + arrAmigo[i] + "-->" + arrAmigo[0] + '<br>'    
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + arrAmigo[i] + "-->" + arrAmigo[i + 1] + '<br>'    
        }       

    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = ""   
}