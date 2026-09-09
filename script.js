const editorials = document.querySelector(".editorials");
const track = document.querySelector(".editorials-track");

let horizontalPosition = 0;

window.addEventListener(
    "wheel",
    function (event) {

        const sectionTop = editorials.offsetTop;
        const sectionBottom =
            sectionTop + editorials.offsetHeight;

        const scrollPosition = window.scrollY;

        const isInsideEditorials =
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom;

        const maxScroll =
            track.scrollWidth - window.innerWidth + 24;


        if (
            isInsideEditorials &&
            event.deltaY > 0 &&
            horizontalPosition < maxScroll
        ) {

            event.preventDefault();

            horizontalPosition += event.deltaY;

            if (horizontalPosition > maxScroll) {
                horizontalPosition = maxScroll;
            }

            track.style.transform =
                `translateX(-${horizontalPosition}px)`;
        }


        if (
            isInsideEditorials &&
            event.deltaY < 0 &&
            horizontalPosition > 0
        ) {

            event.preventDefault();

            horizontalPosition += event.deltaY;

            if (horizontalPosition < 0) {
                horizontalPosition = 0;
            }

            track.style.transform =
                `translateX(-${horizontalPosition}px)`;
        }

    },
    { passive: false }
);
