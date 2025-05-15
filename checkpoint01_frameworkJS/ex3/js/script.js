let quantidadeDiarias = (parseInt(Math.random()*29))+1;
let totalTaxaServico = 0;

if (quantidadeDiarias > 15) {
    totalTaxaServico = quantidadeDiarias * 45.50;
} else if( quantidadeDiarias == 15 ) {
    totalTaxaServico = quantidadeDiarias * 66;
} else {
    totalTaxaServico = quantidadeDiarias * 88;
}

let totalPrecoDiarias = quantidadeDiarias * 360;
let totalContaCliente = totalPrecoDiarias + totalTaxaServico;

console.log(`Total de Diárias: ${quantidadeDiarias}`);
console.log(`Valor total de Diárias: ${totalPrecoDiarias}`);
console.log(`Total da taxa de serviço: ${totalTaxaServico}`);
console.log(`Total geral da conta: ${totalContaCliente}`);