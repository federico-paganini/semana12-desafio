/* Selector de Estrellas */
const estrellas = document.querySelectorAll(".stars-label");

estrellas.forEach(function (estrella, index) {
    estrella.addEventListener("click", function () {
        for (let i = 0; i <= index; i++) {
            estrellas[i].classList.add("checked");
        }
        for (let i = index + 1; i < estrellas.length; i++) {
            estrellas[i].classList.remove("checked");
        }
    })
});