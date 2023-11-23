let totalGeral;
limpar();

/*
let listaProdutos = document.getElementById('lista-produtos');
listaProdutos.innerHTML = ""
let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = ""; */

let formItens = document.querySelector('#formulario')



console.log(listaProdutos)


function adicionar() {

    //pegar os itens
    //adicionar o novo texto ao carrinho
    //desestruturar o array e adicionar os itens a um novo array
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeItem = produto.split('-')[0];
    let valorItem = produto.split('R$')[1];
    let preco =  quantidade * valorItem

    let listaProdutos = document.getElementById('lista-produtos')
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeItem} <span class="texto-azul">${preco}</span>
  </section>`
    
    totalGeral = totalGeral + preco;

    let campoTotal = document.getElementById('valor-total')
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    

    console.log(preco)
    
}


function limpar() {

    totalGeral = 0;
    document.getElementById ('lista-produtos').innerHTML = '';
    document.getElementById ('valor-total').textContent = 'R$ 0';
    
}
