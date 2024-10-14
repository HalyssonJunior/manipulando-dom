const title = document.getElementById("titulo");

const helloBtn = document.getElementById("botao-ola");

const changeTitleBtn = document.getElementById("btn-mudar-titulo");

const btnChangeAll = document.getElementById("btn-mudar-3");

helloBtn.addEventListener("click", function (){
    alert("Olá!");
});

changeTitleBtn.addEventListener("click", function () {
    title.textContent = "O titulo foi mudado utilizando JS!";
});

btnChangeAll.addEventListener("click", function () {
    const frase = document.querySelectorAll(".mensagem2");

    for (let i = 0; i < frase.length; i++) {
        frase[i].textContent = `${i+1}º frase alterada`;
    }
});