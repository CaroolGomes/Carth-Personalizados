let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

let html = ""
let total = 0

carrinho.forEach(item=>{
html += `<p>${item.nome} - R$ ${item.total.toFixed(2)}</p>`
total += item.total
})

document.getElementById("listaCarrinho").innerHTML = html
document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2)

function finalizar(){

let mensagem = "Pedido:%0A"

carrinho.forEach(item=>{
mensagem += `${item.nome} - R$ ${item.total.toFixed(2)}%0A`
})

mensagem += `Total: R$ ${total.toFixed(2)}`

window.open(`https://wa.me/5599999999999?text=${mensagem}`)
}
