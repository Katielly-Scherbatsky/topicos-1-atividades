function diaDaSemana(numero) {
  let numeroDaSemana = numero;

  if (numeroDaSemana == 1) {
    console.log("Domingo");
  } else if (numeroDaSemana == 2) {
    console.log("Segunda-Feira");
  } else if (numeroDaSemana == 3) {
    console.log("Terça-Feira");
  } else if (numeroDaSemana == 4) {
    console.log("Quarta-Feira");
  } else if (numeroDaSemana == 5) {
    console.log("Quinta-Feira");
  } else if (numeroDaSemana == 6) {
    console.log("Sexta-Feira");
  } else if (numeroDaSemana == 7) {
    console.log("Sábado");
  } else {
    console.log("Valor inválido");
  }
}

module.exports = diaDaSemana;
