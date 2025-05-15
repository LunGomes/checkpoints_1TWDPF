let numeroSorteado1 = parseInt(Math.random()*101);
let numeroSorteado2 = parseInt(Math.random()*101);

let resultadoDivisao = 0;

if (numeroSorteado1 > numeroSorteado2) {
    resultadoDivisao = numeroSorteado1 / numeroSorteado2;
} else {
    resultadoDivisao = numeroSorteado2 / numeroSorteado1;
}

console.log(`Primerio número sorteado: ${numeroSorteado1}`);
console.log(`Segundo número sorteado: ${numeroSorteado2}`);

console.log(`Resultado da divisão: ${resultadoDivisao.toFixed(2)}`);