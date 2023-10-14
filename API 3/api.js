import usuario from "./usuario.js"

let usuario_elemento = new usuario()
let conteudo_pag = document.getElementById("conteudo")
fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8") //mock API, site para criar API para teste 
    .then(response => response.json())
    .then(json => {
        // console.log(json)
        usuario_elemento.ListaUsuarios = json
        json.forEach(element => {
            usuario_elemento.CriarUsuario(element.name,element.city,conteudo_pag)
            // console.log(element.name)
        });
    })

let BuscaAlt = false
let TipoBusca = "name"//pesquisa por nome, se for por cidade terá que ser "city"

let Resposta = setInterval(() => {console.log(usuario_elemento.ListaUsuarios)
    clearInterval(Resposta)
    
    document.getElementById("langBusca").addEventListener("click",()=>{
        if(BuscaAlt == false)
        {
            TipoBusca = "city"
            BuscaAlt = true
        }
        else{
            TipoBusca = "name"
            BuscaAlt = false
        }
    })
    document.getElementById("busca").addEventListener("click", () =>{
        let ValorBusca = document.getElementById("filtro").value
        let Buscafeita = false
        usuario_elemento.ListaUsuarios.forEach(element =>{
            // if(element.name== ValorBusca)
            if(element[TipoBusca]== ValorBusca)//ou element["name"] para escolha dinamica, trocar o método de busca 
            {
                conteudo_pag.innerHTML=""
                usuario_elemento.CriarUsuario(element.name,element.city,conteudo_pag)
                Buscafeita= true
            }
        });
        if (Buscafeita == false){
            alert("usuario digitado não existe")
        }
    })

},90);