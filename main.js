

function calcularGastos() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const consumo = 11.3; 
  const precoGasolina = 3.90; 

  // Calcula a quantidade de litros de gasolina necessária
  const litros = distancia / consumo;

  // Calcula o valor total gasto com a gasolina
  const valorTotal = litros * precoGasolina;

  // Exibe os resultados no elemento HTML
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "Quantidade de litros necessários: " + litros.toFixed(2) + " litros<br><br>";
  resultadoElement.innerHTML += "Valor total gasto: R$ " + valorTotal.toFixed(2);
}
