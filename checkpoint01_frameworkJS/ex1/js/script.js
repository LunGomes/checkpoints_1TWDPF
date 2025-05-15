let desconto = parseInt(Math.random()*51);
let preco = parseInt(Math.random()*1001);

if (preco < 200) {
    preco = preco + 200;
} 

console.log(`Preço inicial: ${preco}`);

desconto = preco * (desconto / 100);
preco = preco - desconto;

console.log(`Valor do desconto: ${desconto}`);
console.log(`Preço final: ${preco}`);