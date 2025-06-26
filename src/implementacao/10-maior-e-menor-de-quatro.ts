function determinarMaiorMenorDeQuatro( a : number, b : number, c : number, d : number ) : string {
    const numeros = [ a, b, c, d];
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior ) {
            maior = numeros[i];
        } else if (numeros[i] < menor){
            menor = numeros[i];
        }
        
    }

    return `Maior: ${maior}, Menor: ${menor}`;
}

console.log(determinarMaiorMenorDeQuatro(1, 2, 3, 4));
console.log(determinarMaiorMenorDeQuatro(-1, 0, -10, 20));