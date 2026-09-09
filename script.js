const editorials = document.querySelector(".editorials");
const track = document.querySelector(".editorials-track");


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

    const sectionHeight =
        editorials.offsetHeight;

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
