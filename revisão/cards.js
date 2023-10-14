//Caso 1
// document.getElementById("Criar_01").addEventListener("click",()=>{
// document.getElementsByClassName("PortaCard")[0].innerHTML+="<div class = 'card'"+"<h1>Card_teste01</h1></div>"
// document.getElementById("Criar_01").remove()
// })

//caso 2
// document.getElementById("Criar_01").addEventListener("click",CriarCard)

// function CriarCard(){
//     for(let index=0; index<3;index++){
//         document.getElementsByClassName("PortaCard")[0].innerHTML+="<div class='card'"+"<h1>Card_teste</h1></div>"
//     }
//     document.getElementById("Criar_01").remove()
// }

//Caso 3
document.getElementById("Criar_01").addEventListener("click",CriarCard)

let Conteudo = [ElementoCard("Titulo 1","Conteudo tal"),ElementoCard("Titulo 2","Conteudo tal"),ElementoCard("Titulo 3","Conteudo tal")]
function CriarCard(){
    for(let index=0; index<3;index++){
        document.getElementsByClassName("PortaCard")[0].innerHTML+="<div class='card'"+"<h1>"+Conteudo[index]+"</h1></div>"
    }
    document.getElementById("Criar_01").remove()
}

function ElementoCard(Titulo,Conteudo){
    return "<article><h1>"+Titulo+"</h1> <h3>"+Conteudo+"</h3></article>"
}