
class navComponente{
    CriarNovoMenu(IdDoMenu,Elementos){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<ul id='Menu_02'></ul>"
        let MenuAcrescentar = document.getElementById("Menu_02")
        Elementos.forEach(Menuadd => {
            MenuAcrescentar.innerHTML+="<li><a href='#'>"+Menuadd+"</a></li>"
        });
        MenuAcrescentar.innerHTML+=""
    }
    CriarBarraNavUsuario(IdDoMenu,localizacao){
        let MenuEscolhido = document.getElementById(IdDoMenu)
        MenuEscolhido.innerHTML+="<div class='localNav'><h4>" +localizacao+ "</h4></div>"
    }
}

export default navComponente