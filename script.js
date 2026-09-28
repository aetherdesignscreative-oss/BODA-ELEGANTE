/* =====================================================
   ELEMENTOS
===================================================== */

const inicio =
    document.getElementById("inicio");

const musica =
    document.getElementById("musica");

const carta =
    document.getElementById("carta");

const invitacion =
    document.getElementById("invitacion");


const btnComenzar =
    document.getElementById("btnComenzar");

const btnPresionar =
    document.getElementById("btnPresionar");


const transicion =
    document.getElementById("transicion");


const audio =
    document.getElementById("audio");


const panelMusica =
    document.getElementById("panelMusica");

const panelGaleria =
    document.getElementById("panelGaleria");


const btnMusica =
    document.getElementById("btnMusica");

const btnGaleria =
    document.getElementById("btnGaleria");


const cerrarMusica =
    document.getElementById("cerrarMusica");

const cerrarGaleria =
    document.getElementById("cerrarGaleria");


const btnPlay =
    document.getElementById("btnPlay");


const barraProgreso =
    document.getElementById("barraProgreso");


const cancionActual =
    document.getElementById("cancionActual");



/* =====================================================
   CAMBIO ELEGANTE DE PANTALLA
===================================================== */

function cambiarPantalla(nuevaPantalla) {

    transicion.classList.add("activa");


    setTimeout(() => {

        inicio.classList.add("oculto");
        musica.classList.add("oculto");
        carta.classList.add("oculto");
        invitacion.classList.add("oculto");


        nuevaPantalla.classList.remove("oculto");


        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


    }, 650);


    setTimeout(() => {

        transicion.classList.remove("activa");

    }, 1300);

}



/* =====================================================
   COMENZAR
===================================================== */

btnComenzar.addEventListener(
    "click",
    () => {

        cambiarPantalla(musica);

    }
);



/* =====================================================
   CANCIONES
===================================================== */

const canciones =
    document.querySelectorAll(".cancion");


canciones.forEach(cancion => {


    cancion.addEventListener(
        "click",
        () => {


            canciones.forEach(item => {

                item.classList.remove(
                    "seleccionada"
                );

            });


            cancion.classList.add(
                "seleccionada"
            );


            const archivo =
                cancion.dataset.song;


            const nombre =
                cancion.dataset.name;


            reproducirCancion(
                archivo,
                nombre
            );


            setTimeout(() => {

                cambiarPantalla(carta);

            }, 500);


        }
    );

});



/* =====================================================
   REPRODUCIR CANCIÓN
===================================================== */

function reproducirCancion(
    archivo,
    nombre
) {

    audio.src = archivo;

    audio.load();

    cancionActual.textContent =
        nombre;


    audio.play()
        .then(() => {

            btnPlay.textContent = "❚❚";

        })
        .catch(() => {

            btnPlay.textContent = "▶";

        });

}



/* =====================================================
   CARTA
===================================================== */

btnPresionar.addEventListener(
    "click",
    () => {

        cambiarPantalla(invitacion);

    }
);



/* =====================================================
   MÚSICA
===================================================== */

btnMusica.addEventListener(
    "click",
    () => {

        panelMusica.classList.add(
            "activo"
        );

    }
);



/* =====================================================
   CERRAR MÚSICA
===================================================== */

cerrarMusica.addEventListener(
    "click",
    () => {

        panelMusica.classList.remove(
            "activo"
        );

    }
);



/* =====================================================
   CAMBIAR CANCIÓN
===================================================== */

const miniCanciones =
    document.querySelectorAll(
        ".mini-canciones button"
    );


miniCanciones.forEach(boton => {


    boton.addEventListener(
        "click",
        () => {


            const archivo =
                boton.dataset.song;


            const nombre =
                boton.dataset.name;


            reproducirCancion(
                archivo,
                nombre
            );


        }
    );

});



/* =====================================================
   PLAY / PAUSA
===================================================== */

btnPlay.addEventListener(
    "click",
    () => {


        if (!audio.src) {

            return;

        }


        if (audio.paused) {

            audio.play();

            btnPlay.textContent =
                "❚❚";

        }

        else {

            audio.pause();

            btnPlay.textContent =
                "▶";

        }

    }
);



/* =====================================================
   PROGRESO
===================================================== */

audio.addEventListener(
    "timeupdate",
    () => {


        if (!audio.duration) {

            return;

        }


        const porcentaje =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        barraProgreso.style.width =
            porcentaje + "%";

    }
);



/* =====================================================
   FIN DE CANCIÓN
===================================================== */

audio.addEventListener(
    "ended",
    () => {

        btnPlay.textContent =
            "▶";

        barraProgreso.style.width =
            "0%";

    }
);



/* =====================================================
   GALERÍA
===================================================== */

btnGaleria.addEventListener(
    "click",
    () => {

        panelGaleria.classList.add(
            "activo"
        );

    }
);



/* =====================================================
   CERRAR GALERÍA
===================================================== */

cerrarGaleria.addEventListener(
    "click",
    () => {

        panelGaleria.classList.remove(
            "activo"
        );

    }
);



/* =====================================================
   CERRAR MODALES
===================================================== */

panelMusica.addEventListener(
    "click",
    event => {


        if (
            event.target ===
            panelMusica
        ) {

            panelMusica.classList.remove(
                "activo"
            );

        }

    }
);


panelGaleria.addEventListener(
    "click",
    event => {


        if (
            event.target ===
            panelGaleria
        ) {

            panelGaleria.classList.remove(
                "activo"
            );

        }

    }
);



/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    event => {


        if (event.key === "Escape") {

            panelMusica.classList.remove(
                "activo"
            );

            panelGaleria.classList.remove(
                "activo"
            );

        }

    }
);
