class banner{
    criarBanner(idAlvo, listaBanner){
        let Elemento = document.getElementById(idAlvo)
        Elemento.innerHTML+="<article></article>"
        Elemento.innerHTML+="<button id='btBannerAnterior'> < </button>"
        Elemento.innerHTML+="<button id='btBannerProximo'> > </button>"
    }
    modificaBanner(idAlvo,listaBanner=[""],index=0){
        let Banner = document.getElementById(idAlvo).getElementsByTagName("article")[0]
        Banner.innerHTML=listaBanner[index]
    }
}

export default banner