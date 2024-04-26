function exibirPopUp(titulo, event) {
    event.preventDefault();
    var popUp = document.getElementById("pop-up");
    popUp.style.display = "block";
}

function fecharPopUp() {
    var popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
}