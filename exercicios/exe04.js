function descontoCombustivel(litro, tipo) {
  const precoGasolina = 2.5;
  const precoAlcool = 1.9;

  let valorFinalCombustivel;

  if (tipo == "A") {
    if (litro <= 20) {
      valorFinalCombustivel = litro * precoAlcool;
    } else {
      valorFinalCombustivel = litro * precoAlcool - litro * precoAlcool * 0.05;
    }
  } else if (tipo == "G") {
    if (litro <= 20) {
      valorFinalCombustivel = litro * precoGasolina;
    } else {
      valorFinalCombustivel =
        litro * precoGasolina - litro * precoGasolina * 0.06;
    }
  }

  console.log("O valor a ser pago é: R$ " + valorFinalCombustivel);
}

module.exports = descontoCombustivel;
