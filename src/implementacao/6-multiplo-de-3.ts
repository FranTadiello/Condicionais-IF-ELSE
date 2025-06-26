function verificarMultiploDe3( numero : number ) : string {
    return numero % 3 === 0 ? "é múltiplo de 3" : "não é múltiplo de 3";
}

console.log(verificarMultiploDe3(9));
console.log(verificarMultiploDe3(10));
console.log(verificarMultiploDe3(0));