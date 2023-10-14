let Var_card = document.getElementById(artigos_01)
Num_card = 1

function criarCard(){
    Var_card.innerHTML+="<div id='card'"+Num_card+"><h3>Texto do Card</h3></div>"
    Var_card.innerHTML+="<h3 style='background-color: blue; color:white; margin-top:55vh;</h3>"
    Num_card += 1
}

setInterval(criarCard,1000)
