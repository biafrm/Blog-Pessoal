function exibirPopUp(titulo, event) {
    event.preventDefault();
    var popUp = document.getElementById("pop-up");
    popUp.style.display = "block";
}

function fecharPopUp() {
    var popUp = document.getElementById("pop-up");
    popUp.style.display = "none";
}


function toggleFAQ(index) {
    var faqs = document.getElementsByClassName("faq-item");
    for (let i = 0; i < faqs.length; i++) {
        var content = faqs[i].getElementsByClassName("faq-content")[0];
        var sign = faqs[i].getElementsByClassName("toggle-sign")[0];
        if (i === index) {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                sign.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                sign.textContent = '-';
            }
        } else {
            content.style.maxHeight = null;
            sign.textContent = '+';
        }
    }
}