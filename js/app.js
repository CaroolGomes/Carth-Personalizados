async function carregarDados() {
const resp = await fetch("data/produtos.json")
return resp.json()
}

const urlParams = new URLSearchParams(window.location.search)
const categoriaID = urlParams.get("categoria")

carregarDados().then(data => {

if(document.getElementById("categorias")){

let html = ""

data.categorias.forEach(cat=>{
html += `
<div class="card">
<h3>${cat.nome}</h3>
<a href="categoria.html?categoria=${cat.id}">
<button>Ver</button>
</a>
</div>
`
})

document.getElementById("categorias").innerHTML = html
}

if(categoriaID){

const categoria = data.categorias.find(c=>c.id==categoriaID)

document.getElementById("tituloCategoria").innerText = categoria.nome

let html = ""

categoria.produtos.forEach(prod=>{
html += `
<div class="card">
<h3>${prod.nome}</h3>
<a href="produto.html?categoria=${categoria.id}&produto=${prod.id}">
<button>Ver Produto</button>
</a>
</div>
`
})

document.getElementById("produtos").innerHTML = html
}

})
