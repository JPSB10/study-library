
class Card{
    _TipoDeCard = "card"
    CriarCard(IdAlvo,Titulo,Conteudo){
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML+="<div class='"+this._TipoDeCard+"'><h1>"+Titulo+"</h1><h4>"+Conteudo+"</h4>"
    }
    EscolherTipo(Tipo){
        this._TipoDeCard = Tipo
    }
}

export default Card