let Contador = 0

document.getElementById("bt_prox").addEventListener("click",BtProxFuncao,false)
document.getElementById("bt_ant").addEventListener("click",BtAntFuncao,false)

let ListaQuadros = ["tema01","tema02","tema03","tema04"]

function BtProxFuncao(){
    if(Contador >=4){
        Contador -=1
        document.getElementById(ListaQuadros[Contador]).style.visibility = "hidden"
        Contador = 0
        document.getElementById(ListaQuadros[Contador]).style.visibility = "visible"
    }
    else{
        if (Contador==0){
            Contador += 1 
            document.getElementById(ListaQuadros[Contador]).style.visibility = "visible"
        }
        else{
            document.getElementById(ListaQuadros[Contador-1]).style.visibility = "hidden"
            document.getElementById(ListaQuadros[Contador]).style.visibility = "visible"
        }
        console.log(ListaQuadros[Contador]) //usado para testar, olhar a aba console do inspecionar
        Contador+=1
    }
}

function BtAntFuncao(){
    if (Contador <=0){
        document.getElementById(ListaQuadros[Contador]).style.visibility = "hidden"
        //Contador = 3
        document.getElementById(ListaQuadros[3]).style.visibility = "visible"
        Contador = 3
    }
    else{
        
        if (Contador >=4){
            //console.log(ListaQuadros[Contador]+" "+Contador)
            //Contador = 3
            document.getElementById(ListaQuadros[Contador]).style.visibility = "hidden"
        }
        else{
            document.getElementById(ListaQuadros[Contador]).style.visibility = "visible"
        }
        if (Contador != 0){
            Contador -= 1
        }
        document.getElementById(ListaQuadros[Contador]).style.visibility="visble"
        console.log(ListaQuadros[Contador])
    }
}
