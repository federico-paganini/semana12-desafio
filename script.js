document.addEventListener("DOMContentLoaded", function () {
    const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments';
    async function cargarComentarios() {
        const commentsContainer = document.getElementById("comments-container");
        try {
            const response = await fetch(COMMENTS_API_URL);
            if (response.ok) {
                const comments = await response.json();
                for (let i = 0; i < 10; i++) {
                    // Función para convertir una puntuación numérica en estrellas
                    function ratingToStars(score, maxScore = 5) {
                        const estrellasVacias = maxScore - score;
                        const estrellas = '★'.repeat(score);
                        const sinEstrellas = '☆'.repeat(estrellasVacias);
                        return estrellas + sinEstrellas;
                    }
                    // Simulamos una puntuación aleatoria para el nuevo comentario
                    let rating = Math.floor(Math.random() * 5) + 1;
                    let estrellas = ratingToStars(rating);
                    let comentario = comments[i].body;
                    let nombre = comments[i].name;
                    commentsContainer.innerHTML +=
                        `<h4>${nombre}<h4>
                    <p>${comentario}<p>
                    <span>${estrellas}<span>`
                }

            } else {
                // Manejar errores si la solicitud no es exitosa
                console.error("Error al obtener la información del producto.");
            }
        } catch (error) {
            console.error("Error en la carga de la información del producto:", error);
        }

    }

    cargarComentarios();

    const formulario = document.getElementById("coment-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const commentsContainer = document.getElementById("comments-container");
        const ncomentario = document.getElementById("comentario").value;
        const nusuario = document.getElementById("nusuario").value;
        const estrellaseleecionada = document.querySelector("input[name='valoracion']:checked");
        let calificacion = "";
        
        
        function ratingToStars(score, maxScore = 5) {
            const estrellasVacias = maxScore - score;
            const estrellas = '★'.repeat(score);
            const sinEstrellas = '☆'.repeat(estrellasVacias);
            return estrellas + sinEstrellas;
        }

        if (estrellaseleecionada.checked) {
            calificacion = estrellaseleecionada.value;
        }

        let nestrellas = ratingToStars(calificacion);


        commentsContainer.innerHTML += `<h3>${nusuario}<h3>
        <p>${ncomentario}<p>
        <span>${nestrellas}<span>
        `

    });

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
});






