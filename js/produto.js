/* ===== A4 ===== */

function comprarA4(){

    let tipo = document.getElementById("a4Tipo");
    let qtd = document.getElementById("a4Qtd").value;

    let nome = "Adesivo A4 - " + tipo.options[tipo.selectedIndex].text;
    let preco = parseFloat(tipo.value);

    adicionarCarrinho(nome, preco, qtd);

}


/* ===== VINIL BASE BRANCA ===== */

function comprarVB(){

    let altura = parseFloat(document.getElementById("vbAltura").value);
    let largura = parseFloat(document.getElementById("vbLargura").value);
    let qtd = parseInt(document.getElementById("vbQtd").value);

    let preco = calcularM2(altura, largura, 65);

    adicionarCarrinho("Vinil Base Branca", preco, qtd);

}

