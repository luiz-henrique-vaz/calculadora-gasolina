

function calcularGastos() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const consumo = 5; 
  const precoGasolina = 3.80; 

  // Calcula a quantidade de litros de gasolina necessária
  const litros = distancia / consumo;

  // Calcula o valor total gasto com a gasolina
  const valorTotal = litros * precoGasolina;

  // Exibe os resultados no elemento HTML
  const resultadoElementL = document.getElementById("resultado-litros");
  const resultadoElementD = document.getElementById("resultado-dinheiro");
  resultadoElementL.innerHTML = "Quantidade de litros necessários: " + litros.toFixed(2) + " litros<br>";
  resultadoElementD.innerHTML = "Valor total gasto: R$ " + valorTotal.toFixed(2);
}
