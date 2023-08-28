function compraMercado(tipo, quantidade, formaPagamento) {
  let fileDuplo;
  let alcatra;
  let picanha;
  let precoTotal;

  if (quantidade <= 5) {
    if (tipo == "File Duplo") {
      precoTotal = quantidade * 4.9;
    } else if (tipo == "Alcatra") {
      precoTotal = quantidade * 5.9;
    } else if (tipo == "Picanha") {
      precoTotal = quantidade * 6.9;
    }
  } else {
    if (tipo == "File Duplo") {
      precoTotal = quantidade * 5.8;
    } else if (tipo == "Alcatra") {
      precoTotal = quantidade * 6.8;
    } else if (tipo == "Picanha") {
      precoTotal = quantidade * 7.8;
    }
  }

  if (formaPagamento == "CA") {
    var valorDesconto = precoTotal * 0.05;
  } else {
    valorDesconto = 0;
  }

  var valorPagar = precoTotal - valorDesconto;

  console.log("Cupom Fiscal:");
  console.log("Tipo: " + tipo);
  console.log("Quantidade de carne: " + quantidade + "Kg");
  console.log("Preço Total R$: " + precoTotal);
  console.log("tipo Pagamento: " + formaPagamento);
  console.log("Valor de desconto R$: " + valorDesconto);
  console.log("Valor a Pagar R$: " + valorPagar);
}

module.exports = compraMercado;
