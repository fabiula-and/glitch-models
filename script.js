const editorials = document.querySelector(".editorials");
const track = document.querySelector(".editorials-track");


/* =========================================
   ROLAGEM HORIZONTAL DOS EDITORIAIS
========================================= */

function setupEditorials() {

    const horizontalDistance =
        track.scrollWidth - window.innerWidth;


    /*
    Cria espaço vertical suficiente
    para percorrer toda a distância horizontal.
    */

    editorials.style.height =
        `${window.innerHeight + horizontalDistance}px`;

}


function updateEditorials() {

    const sectionTop =
        editorials.offsetTop;

    const scrollPosition =
        window.scrollY;


    /*
    Calcula quanto da seção
    já foi percorrido verticalmente.
    */

    let progress =
        scrollPosition - sectionTop;


    const horizontalDistance =
        track.scrollWidth - window.innerWidth;


    /*
    Limita o movimento entre
    o início e o fim dos cards.
    */

    progress = Math.max(
        0,
        Math.min(progress, horizontalDistance)
    );


    track.style.transform =
        `translateX(-${progress}px)`;

}


window.addEventListener(
    "scroll",
    updateEditorials
);


window.addEventListener(
    "resize",
    () => {

        setupEditorials();

        updateEditorials();

    }
);


window.addEventListener(
    "load",
    () => {

        setupEditorials();

        updateEditorials();

    }
);


/* =========================================
   TROCA DE IMAGENS AO PASSAR O MOUSE
========================================= */


/*
Cada editorial possui quatro imagens.

Enquanto o mouse estiver sobre o card,
as imagens serão trocadas automaticamente.

Quando o mouse sair,
o card volta para a primeira imagem.
*/


const editorialCards = [

    {
        selector: ".neo-muse",
        images: [
            "images/neo-muse-01.png",
            "images/neo-muse-02.png",
            "images/neo-muse-03.png",
            "images/neo-muse-04.png"
        ]
    },

    {
        selector: ".neural",
        images: [
            "images/neural-01.png",
            "images/neural-02.png",
            "images/neural-03.png",
            "images/neural-04.png"
        ]
    },

    {
        selector: ".offmodel",
        images: [
            "images/offmodel-01.png",
            "images/offmodel-02.png",
            "images/offmodel-03.png",
            "images/offmodel-04.png"
        ]
    },

    {
        selector: ".raw",
        images: [
            "images/raw-01.png",
            "images/raw-02.png",
            "images/raw-03.png",
            "images/raw-04.png"
        ]
    }

];


editorialCards.forEach((editorial) => {

    const card =
        document.querySelector(editorial.selector);


    const image =
        card.querySelector(".editorial-image");


    let currentImage = 0;

    let interval;


    /*
    Quando o mouse entra no card,
    começa a troca automática.
    */

    card.addEventListener(
        "mouseenter",
        () => {

            interval = setInterval(
                () => {

                    currentImage++;


                    /*
                    Se chegar ao final,
                    volta para a segunda imagem.

                    A primeira continua sendo
                    a imagem principal.
                    */

                    if (
                        currentImage >=
                        editorial.images.length
                    ) {

                        currentImage = 1;

                    }


                    image.src =
                        editorial.images[currentImage];


                },
                900
            );

        }
    );


    /*
    Quando o mouse sai,
    interrompe a animação
    e retorna para a primeira imagem.
    */

    card.addEventListener(
        "mouseleave",
        () => {

            clearInterval(interval);


            currentImage = 0;


            image.src =
                editorial.images[currentImage];

        }
    );

});
