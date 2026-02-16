function calcularValor(prefixo, preco){

    let alt = parseFloat(document.getElementById(prefixo+"Alt").value);
    let lar = parseFloat(document.getElementById(prefixo+"Lar").value);

    if(!alt || !lar) return;

    if(lar > 1.45){
        alert("A largura máxima permitida é 1,45m");
        document.getElementById(prefixo+"Lar").value = 1.45;
        lar = 1.45;
    }

    let total = alt * lar * preco;

    document.getElementById(prefixo+"Total").innerText =
        "Valor: R$ " + total.toFixed(2);
}



function comprarBanner(prefixo, preco, nome){

    let alt = parseFloat(document.getElementById(prefixo+"Alt").value);
    let lar = parseFloat(document.getElementById(prefixo+"Lar").value);
    let qtd = parseInt(document.getElementById(prefixo+"Qtd").value);

    if(!alt || !lar){
        alert("Preencha altura e largura");
        return;
    }

    let valor = alt * lar * preco;

    adicionarCarrinho(
        nome + ` (${alt}m x ${lar}m)`,
        valor,
        qtd
    );

}
