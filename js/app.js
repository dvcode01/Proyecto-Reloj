(function(){
    // variables
    const horaHTML = document.querySelector('#horas');
    const minutoHTML = document.querySelector('#minutos');
    const segundoHTML = document.querySelector('#segundos');

    eventListeners();

    function eventListeners(){
        window.addEventListener('load', mostrarHora);
    }

    function mostrarHora(){
        // creo los valores de horas, minutos y segundos
        let fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

        // inserto los valores en sus respectivos campos
        horaHTML.textContent = String(horas).padStart(2, '0');
        minutoHTML.textContent = String(minutos).padStart(2, '0');
        segundoHTML.textContent = String(segundos).padStart(2, '0');

        // Cambia el valor cada 1 segundo
        setTimeout(() => {
            mostrarHora();
        }, 1000);

    }


})();