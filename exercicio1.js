// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcularEl = document.querySelector("#calcular");

function gravitacao() {
  let G = document.querySelector("#constante").value;
  let M1 = document.querySelector("#massa1").value;
  let M2 = document.querySelector("#massa2").value;
  let d = document.querySelector("#distancia").value;
  let inputResultadoEl = document.querySelector("#resultado");

  inputResultadoEl.value = `${(G * M1 * M2) / d ** 2}`;
}

botaoCalcularEl.addEventListener("click", gravitacao);
