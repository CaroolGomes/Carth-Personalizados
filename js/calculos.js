function calcularM2(h, w, preco) {
  return h * w * preco;
}
export function calcularTotal(carrinho){

    let total = 0;

    carrinho.forEach(item => {

        if(item.preco){
            total += item.preco * item.quantidade;
        }

    });

    return total;
}
