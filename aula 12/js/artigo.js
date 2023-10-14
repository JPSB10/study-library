class Artigo{
    CriarNovoArtigo(Titulo,Conteudo,IdAlvo,NumeroArtigo){
        document.getElementById(IdAlvo).innerHTML+="<div id='Artigo"+NumeroArtigo+"'></div>"
        document.getElementById("Artigo"+NumeroArtigo).innerHTML+=Titulo
        document.getElementById("Artigo"+NumeroArtigo).innerHTML+=Conteudo
    }
}

export default Artigo