document.getElementById("Criar_01").addEventListener("click",CriarCard1)
document.getElementById("Criar_02").addEventListener("click",CriarCard2)

let Conteudo1 = [ElementoCard1("Titulo 1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, blanditiis voluptate natus possimus exercitationem deleniti dolor modi libero ea? Quibusdam, at molestias corrupti reprehenderit porro tenetur distinctio adipisci vero.","<img src='./img/img1.jpg'>"),ElementoCard1("Titulo 2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, blanditiis voluptate natus possimus exercitationem deleniti dolor modi libero ea? Quibusdam, at molestias corrupti reprehenderit porro tenetur distinctio adipisci vero.","<img src='./img/img2.jpg'>")]
let Conteudo2 = [ElementoCard2("Titulo 1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, blanditiis voluptate natus possimus exercitationem deleniti dolor modi libero ea? Quibusdam, at molestias corrupti reprehenderit porro tenetur distinctio adipisci vero."),ElementoCard2("Titulo 2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, blanditiis voluptate natus possimus exercitationem deleniti dolor modi libero ea? Quibusdam, at molestias corrupti reprehenderit porro tenetur distinctio adipisci vero.")]

function CriarCard1(){
    for(let index=0; index<2;index++){
        document.getElementsByClassName("Cards1")[0].innerHTML+="<div class='cardconf1'"+"<h1>"+Conteudo1[index]+"</h1></div>"
    }
    document.getElementById("Criar_01").remove()
}
function CriarCard2(){
    for(let index=0; index<2;index++){
        document.getElementsByClassName("Cards2")[0].innerHTML+="<div class='cardconf2'"+"<h1>"+Conteudo2[index]+"</h1></div>"
    }
    document.getElementById("Criar_02").remove()
}

function ElementoCard1(Titulo,Conteudo,Img){
    return "<article><h1>"+Titulo+"</h1> <h3>"+Conteudo+"</h3></article>"+Img
}

function ElementoCard2(Titulo,Conteudo){
    return "<article><h1>"+Titulo+"</h1> <h3>"+Conteudo+"</h3></article>"
}