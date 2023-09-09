/* custom cursor */
class RingDot {
    constructor() {
        this.root = document.body;
        this.cursor = document.querySelector(".curzr-ring-dot");
        this.dot = document.querySelector(".curzr-ring-dot .curzr-dot");
        this.cursorSize = 25;
        this.cursorStyle = {
            boxSizing: 'border-box',
            position: 'fixed',
            display: 'flex',
            top: `${this.cursorSize / -2}px`,
            left: `${this.cursorSize / -2}px`,
            zIndex: '2147483647',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${this.cursorSize}px`,
            height: `${this.cursorSize}px`,
            backgroundColor: 'var(--c--alabaster--10)',
            boxShadow: '0 0 0 1px var(--c--pine--80)',
            borderRadius: '50%',
            transition: '200ms, transform 100ms',
            userSelect: 'none',
            pointerEvents: 'none'
        };
        this.dotStyle = {
            boxSizing: 'border-box',
            position: 'fixed',
            zIndex: '2147483647',
            width: 'calc(1.2 * var(--sp--2xs))',
            height: 'calc(1.2 * var(--sp--2xs))',
            backgroundColor: 'var(--c--pine--80)',
            boxShadow: '0 0 0 .5px var(--c--accent--80)',
            borderRadius: '50%',
            userSelect: 'none',
            pointerEvents: 'none',
        };
        this.init(this.cursor, this.cursorStyle);
        this.init(this.dot, this.dotStyle);
    }
    init(el, style) {
        Object.assign(el.style, style);
        setTimeout(() => {
            this.cursor.removeAttribute("hidden");
        }, 500);
        this.cursor.style.opacity = 1;
    }
    move(event) {
        const isInteractiveElement = ['svg', 'a'].includes(event.target.localName) || event.target.onclick !== null;
        const isTablet = navigator.maxTouchPoints > 0;

        if (isInteractiveElement || isTablet || Array.from(event.target.classList).includes('ut:cursor-cool')) {
            this.hover(40);
        } else {
            this.hoverout();
        }
        this.pointerX = event.pageX + this.root.getBoundingClientRect().x;
        this.pointerY = event.pageY + this.root.getBoundingClientRect().y;
        this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
    }
    hover(radius) {
        this.cursor.style.width = this.cursor.style.height = `${radius}px`;
        this.cursor.style.top = this.cursor.style.left = `${radius / -2}px`;
    }
    hoverout() {
        this.cursor.style.width = this.cursor.style.height = `${this.cursorSize}px`;
        this.cursor.style.top = this.cursor.style.left = `${this.cursorSize / -2}px`;
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
