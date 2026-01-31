let produtoAtual;
const params = new URLSearchParams(window.location.search);

fetch("data/produtos.json")
.then(r=>r.json())
.then(data=>{
  produtoAtual = data[params.get("cat")]
    .find(p=>p.id===params.get("id"));

  document.getElementById("nome").innerText = produtoAtual.nome;
  document.getElementById("desc").innerText = produtoAtual.descricao;

  if(produtoAtual.tipo==="m2"){
    document.getElementById("opcoes").innerHTML = `
      <input type="number" id="h" placeholder="Altura (m)">
      <input type="number" id="w" placeholder="Largura (m)">
    `;
  }
});

function add(){
  let total = produtoAtual.preco;
  let qtd = document.getElementById("qtd").value;

  if(produtoAtual.tipo==="m2"){
    const h = document.getElementById("h").value;
    const w = document.getElementById("w").value;
    total = h * w * produtoAtual.preco;
  }

  addCarrinho(produtoAtual.nome, total, qtd);
}
