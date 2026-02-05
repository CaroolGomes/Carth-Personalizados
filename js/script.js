/* ============================
   DROPDOWN MENU (SEGURANÇA EXTRA)
============================ */

document.addEventListener("DOMContentLoaded", () => {

    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.classList.add("ativo");
        });

        dropdown.addEventListener("mouseleave", () => {
            dropdown.classList.remove("ativo");
        });
    }

});


/* ============================
   MENU MOBILE (PREPARADO)
============================ */

const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu ul");

if(btnMenu){
    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("menu-mobile");
    });
}


/* ============================
   CARRINHO BASE (LOCAL STORAGE)
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
   ENVIAR PEDIDO PARA WHATSAPP
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

    let numero = "5521992602985"; // COLOQUE SEU WHATSAPP AQUI

    let link = `https://wa.me/${numero}?text=${mensagem}`;

    window.open(link, "_blank");
}
