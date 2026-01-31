const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

fetch("data/produtos.json")
.then(r=>r.json())
.then(data=>{
  document.getElementById("titulo").innerText = cat.toUpperCase();
  data[cat].forEach(p=>{
    document.getElementById("lista").innerHTML += `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <a href="produto.html?cat=${cat}&id=${p.id}">Ver produto</a>
      </div>
    `;
  });
});
