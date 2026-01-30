const produtos = {
  adesivos: [
    {
      nome: "Adesivo Vinil Base Branca",
      tipo: "m2",
      preco: 65
    }
  ],
  banners: [
    {
      nome: "Banner 380g",
      tipo: "m2",
      preco: 70,
      limite: 1.45
    }
  ],
  papelaria: [
    {
      nome: "Caixa Milk Simples",
      tipo: "fixo",
      preco: 2.50
    }
  ]
};

const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

const container = document.getElementById("produtos");

produtos[cat].forEach(p => {
  container.innerHTML += `
    <div class="card">
      <h3>${p.nome}</h3>
      ${p.tipo === "m2" ? `
        <input type="number" placeholder="Altura (m)" id="h">
        <input type="number" placeholder="Largura (m)" id="w">
      ` : ``}
      <input type="number" value="1" min="1" id="qtd">
      <button onclick="addCarrinho('${p.nome}', ${p.preco}, '${p.tipo}')">Adicionar</button>
    </div>
  `;
});
