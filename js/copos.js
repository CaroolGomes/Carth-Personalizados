const produto = document.getElementById("produto");
const valorTexto = document.getElementById("valorProduto");

if(produto){

    produto.addEventListener("change", () => {

        let preco = produto.value;

        valorTexto.innerText =
            "Valor unitário: R$ " + parseFloat(preco).toFixed(2);

    });

}

function comprar(){

    let nomeProduto =
        produto.options[produto.selectedIndex].text;

    let cor = document.getElementById("cor").value;
    let preco = parseFloat(produto.value);
    let qtd = parseInt(document.getElementById("quantidade").value);

    let descricao = nomeProduto + " | Cor: " + cor;

    adicionarCarrinho(descricao, preco, qtd);

}
