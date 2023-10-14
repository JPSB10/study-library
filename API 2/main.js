function CriarCardProduto(NomeProduto,Valor,Descricao){
    document.getElementById("conteudo").innerHTML+="<div class='cardproduto'> "+"<h1>"+NomeProduto+"</h1> <h3>"+Descricao+"</h3> <h2>"+Valor+"</h2></div>" 
}



fetch('produtos.json')
    .then(response => response.json())
    .then(json =>{
        //document.getElementById("conteudo").innerHTML = json
        //leitura do json bruto dentro do console
        //console.log(json.Produtos)
        let Produtos = json.Produtos
        let Quantidade = 0

        while(Quantidade <= Object.keys(json.Produtos).length-1){
            let Produto_tenis=Produtos["Tenis_"+Quantidade]
            console.log(Produto_tenis[0])
            CriarCardProduto(Produto_tenis[0],Produto_tenis[1],Produto_tenis[2])
            Quantidade++
        }
    })