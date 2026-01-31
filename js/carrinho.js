let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(nome, preco, qtd){
  carrinho.push({nome, preco, qtd});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado!");
}

function finalizar(){
  let msg = "Pedido Carth:%0A";
  let total=0;

  carrinho.forEach(i=>{
    msg+=`${i.nome} - ${i.qtd}x%0A`;
    total+=i.preco*i.qtd;
  });

  msg+=`Total: R$ ${total.toFixed(2)}`;
  window.open(`https://wa.me/55SEUNUMERO?text=${msg}`);
}
