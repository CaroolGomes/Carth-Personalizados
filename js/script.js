document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU DROPDOWN
    ========================= */

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        let timeout;

        dropdown.addEventListener("mouseenter", () => {
            clearTimeout(timeout);
            dropdown.classList.add("ativo");
        });

        dropdown.addEventListener("mouseleave", () => {
            timeout = setTimeout(() => {
                dropdown.classList.remove("ativo");
            }, 200);
        });

    });

});

/* =========================
   CARRINHO
========================= */

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(produto, preco, quantidade){

    if(quantidade < 1) quantidade = 1;

    carrinho.push({
        produto,
        preco,
        quantidade
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}

/* =========================
   FINALIZAR WHATSAPP
========================= */

function enviarWhatsApp(){

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer um pedido:%0A%0A";

    let total = 0;

    carrinho.forEach(item => {
        mensagem += `Produto: ${item.produto}%0AQuantidade: ${item.quantidade}%0AValor: R$ ${(item.preco * item.quantidade).toFixed(2)}%0A%0A`;
        total += item.preco * item.quantidade;
    });

    mensagem += `Total: R$ ${total.toFixed(2)}`;

    const numero = "5521992602985";
    const link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}
