document.addEventListener('DOMContentLoaded', function() {
    const testimonialWrappers = document.querySelectorAll('.com-testimonial-wrapper');
    let maxHeight = 0;

    testimonialWrappers.forEach(wrapper => {
        const height = wrapper.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    testimonialWrappers.forEach(wrapper => {
        wrapper.style.minHeight = maxHeight + 'px';
    });
});


const currentUrl = window.location.href;

if (currentUrl.endsWith('index.html') || currentUrl.endsWith('index')) {
    window.location.href = currentUrl.replace(/index\.html?$|index$/, '');
} else if (currentUrl.endsWith('.html')) {
    window.location.href = currentUrl.replace(/\.html$/, '');
}

