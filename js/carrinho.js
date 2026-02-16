let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(produto, preco, quantidade){

    carrinho.push({
        produto,
        preco,
        quantidade
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado!");
}
