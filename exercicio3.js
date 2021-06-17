// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
function expandir(event){
    event.currentTarget.parentNode.classList.toggle('expandido');
    event.currentTarget.innerHTML = (event.currentTarget.innerHTML === "+")?"-":"+";
}

let buttonsEl = document.querySelectorAll(".botao-expandir-retrair");
for(let buttonEl of buttonsEl)
    buttonEl.addEventListener("click", expandir);