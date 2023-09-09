/* custom cursor */
class RingDot {
    constructor() {
        this.root = document.body;
        this.cursor = document.querySelector(".curzr-ring-dot");
        this.cursorSize = 25;
        this.cursorStyle = {
            /* Estilos del cursor */
        };
        this.init(this.cursor, this.cursorStyle);
    }

    init(el, style) {
        Object.assign(el.style, style);
        setTimeout(() => {
            this.cursor.removeAttribute("hidden");
        }, 500);
        this.cursor.style.opacity = 1;
    }

    move(event) {
        this.pointerX = event.pageX + this.root.getBoundingClientRect().x;
        this.pointerY = event.pageY + this.root.getBoundingClientRect().y;
        this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
    }

    click() {
        this.cursor.style.transform += ` scale(0.75)`;
        setTimeout(() => {
            this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '');
        }, 35);
    }

    hidden() {
        this.cursor.style.opacity = 0;
        setTimeout(() => {
            this.cursor.setAttribute("hidden", "hidden");
        }, 500);
    }
}

const cursor = new RingDot();
document.addEventListener('pointermove', (event) => {
    cursor.move(event);
});
document.addEventListener('click', () => {
    cursor.click();
});

// /* building tik-tak-toe */

// document.addEventListener('DOMContentLoaded', function () {
//     const darkenElement = document.querySelector('.ut-darken');
//     const textElements = document.querySelectorAll('.ut-darken .c-el--pine');
//     const borderElement = document.querySelector('.ut-obj-respond.c-bor--pine');
//     let isDarkMode = false;

//     function updateDarkMode(progress) {
//         const transitionDuration = (0.5 + progress * 0.5).toFixed(2) + 's';

//         darkenElement.style.transition = 'background-color ' + transitionDuration + ' ease';
//         textElements.forEach(function (element) {
//             element.style.transition = 'color ' + transitionDuration + ' ease';
//         });
//         borderElement.style.transition = 'border-color ' + transitionDuration + ' ease';

//         if (progress > 0.75 && !isDarkMode) {
//             darkenElement.classList.remove('c-bg--alabaster');
//             darkenElement.classList.add('c-bg--pine');

//             textElements.forEach(function (element) {
//                 element.classList.remove('c-el--pine');
//                 element.classList.add('c-el--white');
//             });

//             borderElement.classList.remove('c-bor--pine');
//             borderElement.classList.add('c-bor--white');

//             isDarkMode = true;
//         } else if (progress <= 0.75 && isDarkMode) {
//             darkenElement.classList.add('c-bg--alabaster');
//             darkenElement.classList.remove('c-bg--pine');

//             textElements.forEach(function (element) {
//                 element.classList.add('c-el--pine');
//                 element.classList.remove('c-el--white');
//             });

//             borderElement.classList.add('c-bor--pine');
//             borderElement.classList.remove('c-bor--white');

//             isDarkMode = false;
//         }
//     }

//     window.addEventListener('scroll', function () {
//         const elementTop = darkenElement.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         const progress = Math.min(Math.max(1 - (elementTop / windowHeight), 0), 1);
//         updateDarkMode(progress);
//     });
// });
