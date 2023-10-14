let Cards = ["<div class = 'card'>Valor de entrada</div>","<div class = 'card'>Valor de Saida</div>"]
let button = ["<button id='bt_01'>Comprar aqui </button>","<button id='bt_02'>Comprar depois</button>"]

for(let var_a = 0;var_a != 4;var_a++){

    if(var_a == 1 || var_a ==3)
    {
        document.getElementById("campo").innerHTML+="<div id='01"+var_a+"'><h3>Elemento especial</h3></div>"
        document.getElementById("01"+var_a).style.backgroundColor = "red"
    }
    else{
        document.getElementById("campo").innerHTML+="<h1>Elemento"+var_a+"</h1></br>"
    }
}

let var_b = 10
while(var_b >= 0){
    document.getElementById("campo").innerHTML+="<h2>Elemento"+var_b+"</h2></br>"
    if(var_b <= 1){
        document.getElementById("campo").innerHTML+=Cards[var_b]
        document.getElementById("campo").innerHTML+=button[var_b]
    }
    var_b-=1
}


document.getElementById("bt_01").addEventListener("click",()=>{
    //alert("clique aqui")
    document.getElementById("campo").innerHTML+="<h1>Botão_01</h1>"
})

document.getElementById("bt_02").addEventListener("click",()=>{
    //alert("clique aqui")
    document.getElementById("campo").innerHTML+="<h1>Botão_02</h1>"
})