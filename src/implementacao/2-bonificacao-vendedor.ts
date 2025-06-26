function calcularBonificacao(valorUnitario: number, qtdVendida: number) : string {
    const valorTotal = valorUnitario * qtdVendida;

    if ( valorTotal > 100 ) {
        return `Valor total: R$${valorTotal}. Bonificação de 10% para o vendedor!`;
    } else {
        return `Valor total: R$${valorTotal}`;
    }
}

console.log(calcularBonificacao(20, 6));
console.log(calcularBonificacao(15, 4));
