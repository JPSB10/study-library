class usuario{
    ListaUsuarios = []
    CriarUsuario(name, city, element){
        element.innerHTML+="<div class='card'><h1>"+name+"</h1><h2>"+city+ "</h2></div>"
    }
}

export default usuario