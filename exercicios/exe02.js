function calculoPagamento(quantidadeHoras, valorHora) {
  let salarioBruto = quantidadeHoras * valorHora;
  var percentualDesconto;

  if (salarioBruto <= 900) {
    percentualDesconto = 0;
  } else if (salarioBruto <= 1500) {
    percentualDesconto = 5;
  } else if (salarioBruto <= 2500) {
    percentualDesconto = 10;
  } else if (salarioBruto > 2500) {
    percentualDesconto = 20;
  }

  var valorDescontadoIR = (percentualDesconto / 100.0) * salarioBruto;
  var valorDescontadoInss = (10 / 100) * salarioBruto;
  var valorDescontadoFgts = (11 / 100) * salarioBruto;
  var totalDescontado =
    valorDescontadoIR + valorDescontadoInss + valorDescontadoFgts;
  var salarioLiquido = salarioBruto - totalDescontado;

  console.log("Salário Bruto é: R$ " + salarioBruto);
  console.log("Valor de desconto do IR: R$ " + valorDescontadoIR);
  console.log("Valor de desconto do INSS: R$ " + valorDescontadoInss);
  console.log("Valor de desconto do FGTS: R$ " + valorDescontadoFgts);
  console.log("Total de Descontos: R$ " + totalDescontado);
  console.log("Salário Liquido: R$ " + salarioLiquido);
}

module.exports = calculoPagamento;
