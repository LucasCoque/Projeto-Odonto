document.getElementById("formulario-login").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("caixa-confirmacao").style.display = "flex";
});

document.getElementById("botao-ok").addEventListener("click", function () {
    window.location.href = "./home-professor.html";
});