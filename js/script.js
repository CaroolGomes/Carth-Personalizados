document.addEventListener("DOMContentLoaded", () => {

    /* DROPDOWN */
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {

        dropdown.addEventListener("mouseenter", () => {
            dropdown.classList.add("ativo");
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.classList.remove("ativo");
        });

    });

});


/* ============================
   CARRINHO BASE
============================ */

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(produto, quantidade){

    let item = {
        produto: produto,
        quantidade: quantidade
    };

    carrinho.push(item);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Item adicionado ao carrinho!");
}


/* ============================
   ENVIAR WHATSAPP
============================ */

function enviarWhatsApp(){

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de fazer um pedido:%0A%0A";

    carrinho.forEach(item => {
        mensagem += `Produto: ${item.produto}%0AQuantidade: ${item.quantidade}%0A%0A`;
    });

    let numero = "5521992602985";

    let link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}
