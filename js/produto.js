aimport { adicionarCarrinho } from "./carrinho.js";

export function iniciarProdutos(){

    const botoes = document.querySelectorAll("[data-produto]");

    botoes.forEach(botao => {

        botao.addEventListener("click", () => {

            const produto = botao.dataset.produto;
            const quantidade = botao.dataset.quantidade || 1;

            adicionarCarrinho(produto, quantidade);

        });

    });

}
