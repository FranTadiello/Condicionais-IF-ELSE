function verificarParOuImpar( numero: number) : string {
    return numero % 2 === 0 ? "PAR" : "ÍMPAR";
}

console.log (verificarParOuImpar(4));
console.log (verificarParOuImpar(7));
console.log (verificarParOuImpar(0));