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
            "images/2-rebecca-02.png";

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


/* =========================================
   FEATURED CAST — VANESSA VEGA
========================================= */


/*
O card da Vanessa possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const vanessaCard =
    document.querySelector(".model-vanessa");


const vanessaImage =
    vanessaCard.querySelector(".model-image");


const vanessaHoverImage =
    vanessaCard.dataset.imageHover;


vanessaCard.addEventListener(
    "mouseenter",
    () => {

        vanessaImage.src =
            vanessaHoverImage;

    }
);


vanessaCard.addEventListener(
    "mouseleave",
    () => {

        vanessaImage.src =
            "images/4-vanessa-01.png";

    }
);


/* =========================================
   FEATURED CAST — FELIPE ROCHA
========================================= */


/*
O card do Felipe possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const felipeCard =
    document.querySelector(".model-felipe");


const felipeImage =
    felipeCard.querySelector(".model-image");


const felipeHoverImage =
    felipeCard.dataset.imageHover;


felipeCard.addEventListener(
    "mouseenter",
    () => {

        felipeImage.src =
            felipeHoverImage;

    }
);


felipeCard.addEventListener(
    "mouseleave",
    () => {

        felipeImage.src =
            "images/5-felipe-01.jpeg";

    }
);


/* =========================================
   FEATURED CAST — ÁLVARO BLANCO
========================================= */


/*
O card do Álvaro possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const alvaroCard =
    document.querySelector(".model-alvaro");


const alvaroImage =
    alvaroCard.querySelector(".model-image");


const alvaroHoverImage =
    alvaroCard.dataset.imageHover;


alvaroCard.addEventListener(
    "mouseenter",
    () => {

        alvaroImage.src =
            alvaroHoverImage;

    }
);


alvaroCard.addEventListener(
    "mouseleave",
    () => {

        alvaroImage.src =
            "images/6-alvaro-01.png";

    }
);


/* =========================================
   FEATURED CAST — BRENO DUARTE
========================================= */


/*
O card do Breno possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const brenoCard =
    document.querySelector(".model-breno");


const brenoImage =
    brenoCard.querySelector(".model-image");


const brenoHoverImage =
    brenoCard.dataset.imageHover;


brenoCard.addEventListener(
    "mouseenter",
    () => {

        brenoImage.src =
            brenoHoverImage;

    }
);


brenoCard.addEventListener(
    "mouseleave",
    () => {

        brenoImage.src =
            "images/7-breno-01.png";

    }
);


/* =========================================
   FEATURED CAST — NOAH RIBEIRO
========================================= */


/*
O card do Noah possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const noahCard =
    document.querySelector(".model-noah");


const noahImage =
    noahCard.querySelector(".model-image");


const noahHoverImage =
    noahCard.dataset.imageHover;


noahCard.addEventListener(
    "mouseenter",
    () => {

        noahImage.src =
            noahHoverImage;

    }
);


noahCard.addEventListener(
    "mouseleave",
    () => {

        noahImage.src =
            "images/8-noah-01.jpeg";

    }
);


/* =========================================
   FEATURED CAST — MARIANA ALVES
========================================= */


/*
O card da Mariana possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const marianaCard =
    document.querySelector(".model-mariana");


const marianaImage =
    marianaCard.querySelector(".model-image");


const marianaHoverImage =
    marianaCard.dataset.imageHover;


marianaCard.addEventListener(
    "mouseenter",
    () => {

        marianaImage.src =
            marianaHoverImage;

    }
);


marianaCard.addEventListener(
    "mouseleave",
    () => {

        marianaImage.src =
            "images/9-mariana-01.png";

    }
);


/* =========================================
   FEATURED CAST — RITA NAVARRO
========================================= */


/*
O card da Rita possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const ritaCard =
    document.querySelector(".model-rita");


const ritaImage =
    ritaCard.querySelector(".model-image");


const ritaHoverImage =
    ritaCard.dataset.imageHover;


ritaCard.addEventListener(
    "mouseenter",
    () => {

        ritaImage.src =
            ritaHoverImage;

    }
);


ritaCard.addEventListener(
    "mouseleave",
    () => {

        ritaImage.src =
            "images/10-rita-02.png";

    }
);


/* =========================================
   FEATURED CAST — LAURA NAKAMURA
========================================= */


/*
O card da Laura possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const lauraCard =
    document.querySelector(".model-laura");


const lauraImage =
    lauraCard.querySelector(".model-image");


const lauraHoverImage =
    lauraCard.dataset.imageHover;


lauraCard.addEventListener(
    "mouseenter",
    () => {

        lauraImage.src =
            lauraHoverImage;

    }
);


lauraCard.addEventListener(
    "mouseleave",
    () => {

        lauraImage.src =
            "images/11-laura-01.png";

    }
);


/* =========================================
   FEATURED CAST — RUI TEIXEIRA
========================================= */


/*
O card do Rui possui duas imagens.

Imagem 01 = capa
Imagem 02 = hover
*/


const ruiCard =
    document.querySelector(".model-rui");


const ruiImage =
    ruiCard.querySelector(".model-image");


const ruiHoverImage =
    ruiCard.dataset.imageHover;


ruiCard.addEventListener(
    "mouseenter",
    () => {

        ruiImage.src =
            ruiHoverImage;

    }
);


ruiCard.addEventListener(
    "mouseleave",
    () => {

        ruiImage.src =
            "images/12-rui-01.png";

    }
);
