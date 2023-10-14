let ListaQuadros =["Q1","Q2","Q3","Q4"]
let Contador = 0
/*ListaQuadros.push() /*comando para add elemntos a uma lista*/
/*ListaQuadros.pop() /*remove o último elemento da lista*/
document.getElementById("bt_pro").addEventListener("click",BtProxFuncao,false)
document.getElementById("bt_ant").addEventListener("click",BtAntFuncao,false)

function BtProxFuncao(){
    if(Contador >=3){
        alert("Numero maximo alcançaado")
    }
    else{
        Contador+=1
        alert("Estou funcionando"+Contador)
    }
}

function BtAntFuncao(){
    if (Contador <=0){
        alert("Numero minimo alcabçado"+Contador)
    }
    else{
        Contador-=1
        alert("Estou funcionando"+Contador)
    }
}