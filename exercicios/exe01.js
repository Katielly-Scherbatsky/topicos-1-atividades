function reajusteSalarial(nome, salario) {
  let salarioAtual = salario;
  var percentualAumento;

  if(salario <= 280){
    percentualAumento = 20;
  }
  else if(salario <= 700){
    percentualAumento = 15;
  }
  else if(salario <= 1500){
    percentualAumento = 10;
  }
  else if (salario >= 1500) {
    percentualAumento = 15;
  }

  var valorAumento = (percentualAumento / 100) * salarioAtual;
  var novoSalario = salarioAtual + valorAumento;

console.log("Salário do " + nome + " antes do reajuste: R$ " + salarioAtual);
console.log("Percentual de aumento aplicado: " + percentualAumento + "%");
console.log("Valor do aumento: R$ " + valorAumento);
console.log("Novo salário do " + nome + " após o aumento: R$ " + novoSalario);
}

module.exports = reajusteSalarial;
