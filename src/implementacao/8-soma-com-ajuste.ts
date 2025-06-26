function somaComAjuste( a : number, b : number) : string {
    const soma = a + b;

    return soma > 20 ? `Resultado ajustado: ${soma + 8}` : `Resultado ajustado: ${soma - 5}`;
}

console.log(somaComAjuste(15,10));
console.log(somaComAjuste(12,7));