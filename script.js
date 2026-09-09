const editorials = document.querySelector(".editorials");
const track = document.querySelector(".editorials-track");

function setupHorizontalScroll() {

    const trackWidth = track.scrollWidth;

    const viewportWidth = window.innerWidth;

    const horizontalDistance = trackWidth - viewportWidth + 48;


    editorials.style.height =
        `${window.innerHeight + horizontalDistance}px`;

}


function updateHorizontalScroll() {

    const sectionTop =
        editorials.offsetTop;

    const scrollPosition =
        window.scrollY;

    const horizontalDistance =
        track.scrollWidth - window.innerWidth + 48;


    let progress =
        scrollPosition - sectionTop;


    progress = Math.max(
        0,
        Math.min(progress, horizontalDistance)
    );


    track.style.transform =
        `translateX(-${progress}px)`;

}


window.addEventListener(
    "scroll",
    updateHorizontalScroll
);


window.addEventListener(
    "resize",
    () => {

        setupHorizontalScroll();

        updateHorizontalScroll();

    }
);


window.addEventListener(
    "load",
    () => {

        setupHorizontalScroll();

        updateHorizontalScroll();

    }
);
