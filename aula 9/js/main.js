/*
console.log(document.getElementById("caixa")) /* documentt: pegar no body, getElementById: buscar o elemnto pela Id, pode ser por class, teg ou nome, lembrandio que o comando console.log serve para mostrar o campo console do inspecionar
document.getElementById("caixa").style.backgroundColor = "blue" /* exemplo de manipulação de elemento, aqui teve a cor mudada para azul, digitando style. irá aparecer opções de manipulação de estilo de elemnto. 
document.getElementById("caixa").style.borderRadius = "202vh"
document.getElementById("caixa").innerText += "Uma div" /*somando o texto da id com esse
document.getElementById("caixa").innerHTML += "<div class='card'> Olá mundo </div>" /* adicionando elemnentos no HTML
*/

function Função1(Texto){ /* função no Js*/
console.log("Executando")
}

//chamando a função
Função1("Imprime a tela")
Função1("Outra chamada")

function CriarNovoCard(IdElemento, TextoCard){
    document.getElementById(IdElemento).innerHTML+="<div class='card'>"+TextoCard+"</div>"
}

CriarNovoCard("caixa", "NovoCard","Titulo1")
CriarNovoCard("caixa", "NovoCard")
CriarNovoCard("artigos", "NovoCard")
CriarNovoCard("artigos", "NovoCard")

document.getElementById("CardSemCard").className+="card"

document.getElementsByClassName("card")[2].getElementsByClassName.backgroundColor="green"

console.log(document.getElementsByClassName("card"))
