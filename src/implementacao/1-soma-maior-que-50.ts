function somaMaiorQueCinquenta(a: number, b:number) : number | null {
    const soma = a + b;

    if ( soma > 50) {
        return soma;
    } else {
    return null;
    }
}

console.log(somaMaiorQueCinquenta(25, 30));
console.log(somaMaiorQueCinquenta(20, 25));