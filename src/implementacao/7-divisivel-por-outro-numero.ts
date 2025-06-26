function verificarDivisivel( a: number , b : number) : string {
    return a % b === 0 ? `${a} é divisível por ${b}`: `${a} não é divisível por ${b}`
}

console.log(verificarDivisivel(10, 2));
console.log(verificarDivisivel(10, 3));
console.log(verificarDivisivel(20, 5));