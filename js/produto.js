async function carregar() {

const params = new URLSearchParams(window.location.search)
const categoriaID = params.get("categoria")
const produtoID = params.get("produto")

const resp = await fetch("data/produtos.json")
const data = await resp.json()

const categoria = data.categorias.find(c=>c.id==categoriaID)
const produto = categoria.produtos.find(p=>p.id==produtoID)

let html = `
<h2>${produto.nome}</h2>
`

if(produto.tipo == "metro"){

html += `
Altura: <input id="altura"><br>
Largura: <input id="largura"><br>
`
}

html += `
Quantidade: <input id="qtd" value="1"><br>
<button onclick="adicionar('${produto.nome}', ${produto.preco}, '${produto.tipo}')">
Adicionar ao carrinho
</button>
`

document.getElementById("produto").innerHTML = html
}

function adicionar(nome, preco, tipo){

let qtd = Number(document.getElementById("qtd").value)
let total = 0

if(tipo == "metro"){
let a = Number(document.getElementById("altura").value)
let l = Number(document.getElementById("largura").value)
total = a*l*preco*qtd
}else{
total = preco*qtd
}

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

carrinho.push({nome,total})

localStorage.setItem("carrinho", JSON.stringify(carrinho))

alert("Adicionado ao carrinho!")
}

carregar()
