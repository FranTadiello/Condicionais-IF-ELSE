function ordenarAscendente( a:number, b:number, c:number) : string {
    const numeros = [a,b,c];
    for ( let j = 0; j < numeros.length; j++){
        for ( let i = 0; i < numeros.length; i++) { 
            if (numeros[i] > numeros [i+1]) {
                const temp = numeros[i];
                numeros[i] = numeros[i + 1];
                numeros[i + 1] = temp;
            }
        }    
    }

   return `${numeros[0]}, ${numeros[1]}, ${numeros[2]}`;
}

console.log(ordenarAscendente( 3, 1, 2));
console.log(ordenarAscendente( 7, 7, 7));