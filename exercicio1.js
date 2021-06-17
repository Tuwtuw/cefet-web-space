// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelector("#calcular");

function gravitacao() {
  let G = document.querySelector("#constante").value;
  let M1 = document.querySelector("#massa1").value;
  let M2 = document.querySelector("#massa2").value;
  let d = document.querySelector("#distancia").value;
  let inputResultado = document.querySelector("#resultado");

  inputResultado.value = `${(G * M1 * M2) / d ** 2}`;
}

botaoCalcular.addEventListener("click", gravitacao);
