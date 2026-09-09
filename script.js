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
   TROCA DE IMAGENS DOS EDITORIAIS
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


/* =========================================
   FEATURED CAST — SANTINO
========================================= */


/*
O card do Santino possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const santinoCard =
    document.querySelector(".model-santino");


const santinoImage =
    santinoCard.querySelector(".model-image");


const santinoHoverImage =
    santinoCard.dataset.imageHover;


santinoCard.addEventListener(
    "mouseenter",
    () => {

        santinoImage.src =
            santinoHoverImage;

    }
);


santinoCard.addEventListener(
    "mouseleave",
    () => {

        santinoImage.src =
            "images/1-santino-01.png";

    }
);


/* =========================================
   FEATURED CAST — REBECCA
========================================= */


/*
O card da Rebecca possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const rebeccaCard =
    document.querySelector(".model-rebecca");


const rebeccaImage =
    rebeccaCard.querySelector(".model-image");


const rebeccaHoverImage =
    rebeccaCard.dataset.imageHover;


rebeccaCard.addEventListener(
    "mouseenter",
    () => {

        rebeccaImage.src =
            rebeccaHoverImage;

    }
);


rebeccaCard.addEventListener(
    "mouseleave",
    () => {

        rebeccaImage.src =
            "images/2-rebecca-01.jpg";

    }
);

/* =========================================
   FEATURED CAST — MIA PETRONILIA
========================================= */


/*
O card da Mia possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const miaCard =
    document.querySelector(".model-mia");


const miaImage =
    miaCard.querySelector(".model-image");


const miaHoverImage =
    miaCard.dataset.imageHover;


miaCard.addEventListener(
    "mouseenter",
    () => {

        miaImage.src =
            miaHoverImage;

    }
);


miaCard.addEventListener(
    "mouseleave",
    () => {

        miaImage.src =
            "images/3-mia-01.png";

    }
);
