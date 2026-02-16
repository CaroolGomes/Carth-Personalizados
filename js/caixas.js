const selectCaixa = document.getElementById("caixaTipo");
const valorTexto = document.getElementById("caixaValor");

if(selectCaixa){

    selectCaixa.addEventListener("change", () => {

        let preco = selectCaixa.value;

        valorTexto.innerText =
            "Valor unitário: R$ " + parseFloat(preco).toFixed(2);

    });

}

function comprarCaixa(){

    let tipo = selectCaixa.options[selectCaixa.selectedIndex].text;
    let preco = parseFloat(selectCaixa.value);
    let qtd = parseInt(document.getElementById("caixaQtd").value);

    adicionarCarrinho(tipo, preco, qtd);

}
