let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

export function adicionarCarrinho(produto, quantidade){

    const item = {
        produto,
        quantidade
    };

    carrinho.push(item);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Item adicionado ao carrinho!");
}

export function obterCarrinho(){
    return carrinho;
}

export function limparCarrinho(){
    carrinho = [];
    localStorage.removeItem("carrinho");
}

