function calcularRaizOuQuadrado( numero : number ) : number | string {
    if (numero >= 0) {
        const raizNumero = Math.sqrt(numero);

        if (Number.isInteger(raizNumero)) {
            return raizNumero;
        } else {
            return "Não possui raiz quadrada exata";
        }
    } else {
        return numero * numero;
    }
}

console.log(calcularRaizOuQuadrado(16));
console.log(calcularRaizOuQuadrado(25));
console.log(calcularRaizOuQuadrado(18));
console.log(calcularRaizOuQuadrado(-3));
console.log(calcularRaizOuQuadrado(0));
