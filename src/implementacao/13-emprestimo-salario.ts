function verificarEmprestimo(salarioBruto: number, valorPrestacao: number) : boolean {
    const percentual = 0.3*salarioBruto;
    return valorPrestacao <= percentual;
    /*if (valorPrestacao <= percentual) {
        return true;
    } else {
        return false;
    }*/
}

console.log(verificarEmprestimo(3000, 900));
console.log(verificarEmprestimo(4000, 1500));