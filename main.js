const somar = require("./somar");

let resultado = somar(1, 3);
console.log("O resultado da soma = " + resultado);
console.log();

const reajusteSalarial = require("./exercicios/exe01");
const calculoPagamento = require("./exercicios/exe02");
const diaDaSemana = require("./exercicios/exe03");
const descontoCombustivel = require("./exercicios/exe04");
const compraMercado = require("./exercicios/exe05");

reajusteSalarial("João", 1500);
console.log();

calculoPagamento(5, 220);
console.log();

diaDaSemana(5);
console.log();

descontoCombustivel(20, "G");
console.log();

compraMercado("Alcatra", 50, "Dinheiro");
console.log();
