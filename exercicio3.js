// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
function expandir(event){
    event.currentTarget.parentNode.classList.toggle('expandido');
    event.currentTarget.innerHTML = (event.currentTarget.innerHTML === "+")?"-":"+";
}

let buttons = document.querySelectorAll(".botao-expandir-retrair");
for(let button of buttons)
    button.addEventListener("click", expandir);