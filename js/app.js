import { obterCarrinho } from "./carrinho.js";

export function enviarWhatsApp(){

    const carrinho = obterCarrinho();

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer um pedido:%0A%0A";

    carrinho.forEach(item => {
        mensagem += `Produto: ${item.produto}%0AQuantidade: ${item.quantidade}%0A%0A`;
    });

    const numero = "5521992602985";

    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}

