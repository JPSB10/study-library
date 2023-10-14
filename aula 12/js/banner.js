class banner{
    bannerGrande(titulo,imagem,texto,Idlocal){
        document.getElementById(Idlocal).innerHTML+="<h1 style='color:black;margin-top:70vh;position:absolute'>"+titulo+"</h1><br>"
        document.getElementById(Idlocal).innerHTML+="<h3 style='background-color: black;color:white; margin-top:55vh;'>"+texto+"</h3>"
        document.getElementById(Idlocal).style.backgroundImage = imagem
    }
}

export default banner
