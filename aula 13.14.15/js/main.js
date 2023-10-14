import navComponente from "./nav.js"
import banner from "./banner.js"
import Card from"./card_site.js"

let Menus = ["Home","Produtos","Contato","Sobre"]
let nav = new navComponente();
let CardProduto = new Card()
let CardVenda = new Card()

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B = new banner();
let bannerInfo = ["<h1>Compra rapida</h1></br/><h3> Compre roupas mais rápido...</h3>", "<h1>Roupas da moda</h1></br/><h3> Compre roupas da moda</h3>","<h1>Oferta relampago</h1>"]

B.criarBanner("banner_1",)
B.modificaBanner("banner_1",bannerInfo,0)

let bannerIndex = 0
setInterval(()=>{
    if(bannerIndex > 2){
        bannerIndex = 0
    }
    B.modificaBanner("banner_1",bannerInfo,bannerIndex)
    bannerIndex += 1
},5000)

document.getElementById("btBannerProximo").addEventListener("click",()=>{
    if(bannerIndex >= 2){
        bannerIndex = 0
    }
    else{
        bannerIndex+=1
    }
    B.modificaBanner("banner_1",bannerInfo,bannerIndex)
})

document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    if(bannerIndex <= 0){
        bannerIndex = 2
    }
    else{
        bannerIndex-=1
    }
    B.modificaBanner("banner_1",bannerInfo,bannerIndex)
})


CardProduto.CriarCard("PortaCard1","Tenis","Tenis de alta performace")
CardProduto.CriarCard("PortaCard1","Tenis","Tenis de alta performace")
CardVenda.EscolherTipo("cardProduto sombra")
CardVenda.CriarCard("PortaCard1","Produto a venda","Venda do Produto")
CardVenda.EscolherTipo("Card04 sombra")
CardVenda.CriarCard("PortaCard1","Produto04","Venda do Produto04")
CardVenda.EscolherTipo("Card05")
CardVenda.CriarCard("PortaCard1","Produto05","Venda do Produto05")
CardVenda.EscolherTipo("Card06")
CardVenda.CriarCard("PortaCard1","Produto06","Venda do Produto06")
CardVenda.EscolherTipo("Card07")
CardVenda.CriarCard("PortaCard1","Produto07","Venda do Produto07")