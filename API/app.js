fetch('./Livros.json')
    .then(response => response.json())
    .then(json => {
        let Livros = json["Livros"]
        let Assuntos = json.Assuntos[0]["BackEnd"]
        Livros.forEach(element => {
            document.getElementById("ApiRead").innerHTML+="<div id='"+element+"' class='livro'>"+element+"</div>"
            document.getElementById(element).innerHTML+="<h1>"+json.Titulos[element]+"</h1>"
            document.getElementById(element).innerHTML+="<h3>"+json.Preco[element]+"</h3>"
        })
    })