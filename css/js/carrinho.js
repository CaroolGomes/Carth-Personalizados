let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(nome, preco, tipo) {
  let qtd = document.getElementById("qtd").value;
  let total = preco;

  carrinho.push({ nome, qtd, total });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho");
}

function finalizar() {
  let msg = "Pedido Carth Festas:%0A";
  let total = 0;

  carrinho.forEach(i => {
    msg += `${i.nome} - ${i.qtd}x%0A`;
    total += i.total * i.qtd;
  });

  msg += `Total: R$ ${total.toFixed(2)}`;

  window.open(`https://wa.me/55SEUNUMERO?text=${msg}`);
}
