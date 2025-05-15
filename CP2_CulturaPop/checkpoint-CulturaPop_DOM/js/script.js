let btnSortear = document.getElementById("btnSortear");
let quantosIgressos = document.getElementById("quantosIgressos");
let tipoIngressos = document.getElementById("tipoIngressos");
let tipoDescontoEl = document.getElementById("tipoDesconto");
let valorTotalFinal = document.getElementById("valorTotalFinal");

btnSortear.addEventListener('click', function () {
  let qtdIngresso = parseInt(Math.random() * 10)+1;
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

  for (let i = 0; i < qtdIngresso; i++) {
    let valorDesconto = precoIngresso * (desconto / 100);
    let valorTotal = precoIngresso - valorDesconto;
    valorTotalgeral += valorTotal;
  }

  console.log(`Seu evento é o Show Masayoshi Takanaka, no dia 10/02/2026 às 22 horas.`);
  console.log(`Você pode comprar ${qtdIngresso} ingressos do tipo ${ingressoSorteado}.`);
  console.log(`Cada ingresso custa R$ ${precoIngresso} e você terá um desconto de ${desconto}% do pacote ${pacoteDesconto}.`);
  console.log(`O valor final da sua compra é de R$ ${valorTotalgeral}`);

  quantosIgressos.innerText = qtdIngresso;
  tipoIngressos.innerText = `${ingressoSorteado}: R$ ${precoIngresso}`;
  tipoDescontoEl.innerText = `${pacoteDesconto}: ${desconto}% `;
  valorTotalFinal.innerText = `R$ ${valorTotalgeral.toFixed(2)}`;
});