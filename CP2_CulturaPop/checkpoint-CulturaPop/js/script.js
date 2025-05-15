let qtdIngresso = parseInt(Math.random() * 10) + 1;
let tipoIngresso = parseInt(Math.random() * 3);
let tipoDesconto = parseInt(Math.random() * 2);

let ingressoSorteado = "";
let precoIngresso = 0;

if (tipoIngresso == 0) {
  ingressoSorteado = "Normal";
  precoIngresso = 50;
} else if (tipoIngresso == 1) {
  ingressoSorteado = "VIP";
  precoIngresso = 100;
} else {
  ingressoSorteado = "Premium";
  precoIngresso = 200;
}

let desconto = 0;
let pacoteDesconto = "";

if (tipoDesconto == 0) {
  pacoteDesconto = "Estudante";
  desconto = 50;
} else {
  pacoteDesconto = "Fã-clube";
  desconto = 10;
}

let valorTotalgeral = 0;
let valorTotalDesconto = 0;

for (let i = 0; i < qtdIngresso; i++) {
  let valorDesconto = precoIngresso * (desconto / 100);
  let valorTotal = precoIngresso - valorDesconto;
  valorTotalgeral += valorTotal;
  valorTotalDesconto += valorDesconto;
}

let valorTotalgeralPara10 = 0;
let valorTotalDescontoPara10 = 0;

for (let i = 0; i < 10; i++) {
  let valorDescontoPara10 = precoIngresso * (desconto / 100);
  let valorTotalPara10 = precoIngresso - valorDescontoPara10;
  valorTotalgeralPara10 += valorTotalPara10;
  valorTotalDescontoPara10 += valorDescontoPara10;
}

console.log(
  `Seu evento é o Show Masayoshi Takanaka, no dia 10/02/2026 às 22 horas.`
);
console.log(
  `Você pode comprar ${qtdIngresso} ingresso(s) do tipo ${ingressoSorteado}.`
);
console.log(
  `Cada ingresso custa R$ ${precoIngresso},00 e você terá um desconto de R$ ${valorTotalDesconto},00 por causa do pacote ${pacoteDesconto} que te da ${desconto}% de desconto.`
);
console.log(`O valor final da sua compra é de R$ ${valorTotalgeral},00`);

console.log("-----------------------");

console.log(
  `Se você quiser comprar 10 ingressos do tipo ${ingressoSorteado} você pagará R$ ${precoIngresso},00 em cada ingresso, com desconto de R$ ${valorTotalDescontoPara10},00 no total final por causa do pacote ${pacoteDesconto} que te dá ${desconto}% de desconto. O valor final da sua compra será R$ ${valorTotalgeralPara10},00`
);