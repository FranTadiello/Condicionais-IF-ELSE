function determinarMenorMaior( numeroUm : number , numeroDois : number) : string {
    let maior: number;
    let menor: number;

    if (numeroUm > numeroDois) {
        maior = numeroUm;
        menor = numeroDois;
    } else if (numeroDois > numeroUm) {
        maior = numeroDois;
        menor = numeroUm;
    } else {
        maior = menor = numeroUm;
    }
    
    return `Maior: ${maior}, Menor ${menor}`;
}

console.log(determinarMenorMaior(5, 10));
console.log(determinarMenorMaior(7, 7));