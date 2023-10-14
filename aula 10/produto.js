let numItens = 1
let ListaProdutos = []

document.getElementById("addItem").addEventListener("click",()=>{
    if(numItens<=5){
        ListaProdutos.push(document.getElementById("compras").innerHTML+="<div class='produto'><h1>Produto"+ numItens+"</h1><h3>Descrição do Produto</h3></div>")
        console.log(ListaProdutos)
    }
    else{
        alert("Carrinho cheio")
    }
    numItens += 1
})

document.getElementById("imprimirLista").addEventListener("click",()=>{
    console.log(ListaProdutos.length)
    document.getElementById("listaFinal").innerHTML = ""
    for(let Indice=1;Indice<=ListaProdutos.length;Indice++){
        document.getElementById("listaFinal").innerHTML+="<div class='produto'><h1>Produto"+ numItens+"</h1><h3>Descrição do Produto</h3></div>"
    }
})

document.getElementById("apagar").addEventListener("click",()=>{
    document.getElementById("listaFinal").innerHTML = ""
    ListaProdutos = []
    document.getElementById("compras").innerHTML = ""
})