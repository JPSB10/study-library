/*
// parte 1 aula, conhecendo Js
//alert("lógica de programação") teste do Js
//console.log("Olá Mundo") aparecer no cmpo console do inspecionar
let gato = 10 //let = variavel em Js
let peixe = 3
//console.log("o gato vale")
//document.getElementById("campo").innerHTML+-"Go valor dp gato + gato"
gato=gato+10
if(gato>=20){
    document.getElementById("campo").innerHTML+="O gato vale 20"
}
else{
    document.getElementById("campo").innerHTML+="o gato não vale 20"
}

if("peixe>gato"){
    document.getElementById("campo").innerHTML+="o peixe fugiu"
}    
else{
    document.getElementById("campo").innerHTML+="O gato pegou"
    if(gato>26){
        document.getElementById("campo").innerHTML+="<br/> O gato comeu o peixe"
    }
}
*/

let gato = 0
let peixe = 0

gato = window.prompt("Digite a vel do gato", gato)
peixe = window.prompt("Digite a vel do peixe", peixe)

document.getElementById("gato").innerHTML+=gato
document.getElementById("peixe").innerHTML+=peixe

if(gato>peixe){
    gato = window.prompt("Digite a fome do gato",gato)
    if(gato>5){
        document.getElementById("campo").innerHTML+="o gato comeu o peixe"
        document.getElementById("jogo").style.backgroundColor = "green"
        document.getElementById("jogo").style.color = "white"
    }
    else{
        document.getElementById("peixe").innerHTML+="</br> O gato pegou o peixe"
    }
}
else{
    peixe=window.prompt("O peixe voltou para agua?",peixe)
    if(peixe=="sim"){
        document.getElementById("campo").innerHTML+="O peixe voltou para o mar"
        }
    else{
        document.getElementById("campo").innerHTML+="O peixe morreu sufocado"
        }
    }
