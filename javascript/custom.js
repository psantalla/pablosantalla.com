// PLEASE DO NOT FORMAT/COMPRESS THIS CODE WHILE THE PROJECT IS UNDER CONSTRUCTION —
//ONLY USE THIS TOOL TO COMPRESS BEFORE LAUNCHING: https://jscompress.com/ — CAUTIION: MAKE A COPY / SAVE THE FUNCTIONS; IT WILL DELETE COMMENTS

// General consideration: some functions bring heavy content such us images to the navbar without duplicating it: use DOMContentLoaded instead of load as much as possible instead of "load" - only use load if the element has specific styles and put this functions at the end if possible

// img-bg-composition to display properly on mobile without duplicating sections
document.addEventListener("DOMContentLoaded", function () {
    // Function to check if the window width corresponds to a mobile device
    function isMobileWidth() {
        return window.innerWidth <= 619;
    }

    // Check if it's a mobile device before executing the code
    if (isMobileWidth()) {
        // Find the container with the class "com-img-composition--move-there"
        const moveThereContainer = document.querySelector(".com-img-composition--move-there");

        // Get the URL of the image from the first container
        const imageUrl = moveThereContainer.querySelector(".fusion-column-wrapper").getAttribute("data-bg-url");

        // Find the container with the class "com-img-composition--move-here"
        const moveHereContainer = document.querySelector(".com-img-composition--move-here");

        // Replace the URL of the image in the second container with the URL from the first container
        moveHereContainer.querySelector(".fusion-column-wrapper").setAttribute("data-bg-url", imageUrl);
        moveHereContainer.querySelector(".fusion-column-wrapper").style.backgroundImage = `url('${imageUrl}')`;

        // Remove the image from the "move-there" container
        moveThereContainer.querySelector(".fusion-column-wrapper").removeAttribute("data-bg-url");
        moveThereContainer.querySelector(".fusion-column-wrapper").style.backgroundImage = "none";
    }
});





// services slider
document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.com--carousel.hundred-percent-fullwidth.non-hundred-percent-height-scrolling');
    var content = container.querySelector('.fusion-builder-row');
    var carouselCards = content.getElementsByClassName('com--carousel_card');
    var buttonLeft = document.querySelector('.com-btn--left');
    var buttonRight = document.querySelector('.com-btn--right');
    var shakeButton = document.querySelector('.ut--btn-shake');
    var maxClicks = carouselCards.length - 1;
    var remainingClicks = maxClicks;
    var slideDistance;
    // left arrow is disabled at the beginning
    buttonLeft.disabled = true;
    buttonLeft.style.opacity = '0.3';
    buttonLeft.style.cursor = 'not-allowed';
    buttonRight.addEventListener('click', function () {
        if (remainingClicks > 0) {
            var currentTranslateX = parseFloat(content.style.transform.replace('translateX(', '').replace('px)', '') || 0);
            var newTranslateX = currentTranslateX - slideDistance;
            content.style.transition = 'transform 0.3s ease-in-out';
            content.style.transform = 'translateX(' + newTranslateX + 'px)';
            remainingClicks--;
            buttonLeft.disabled = false;
            buttonLeft.style.opacity = '1';
            buttonLeft.style.cursor = 'pointer';
        }
        if (remainingClicks === 0) {
            buttonRight.disabled = true;
            buttonRight.style.opacity = '0.3';
            buttonRight.style.cursor = 'not-allowed';
            // add shake animation to the button
            shakeButton.classList.add('ut--shake');
            // remove the shake class after .5 second
            setTimeout(function () {
                shakeButton.classList.remove('ut--shake');
            }, 500);
        }
    });
    buttonLeft.addEventListener('click', function () {
        if (remainingClicks < maxClicks) {
            var currentTranslateX = parseFloat(content.style.transform.replace('translateX(', '').replace('px)', '') || 0);
            var newTranslateX = currentTranslateX + slideDistance;
            content.style.transition = 'transform 0.3s ease-in-out';
            content.style.transform = 'translateX(' + newTranslateX + 'px)';
            remainingClicks++;
            buttonRight.disabled = false;
            buttonRight.style.opacity = '1';
            buttonRight.style.cursor = 'pointer';
        }
        if (remainingClicks === maxClicks) {
            buttonLeft.disabled = true;
            buttonLeft.style.opacity = '0.3';
            buttonLeft.style.cursor = 'not-allowed';
        }
    });
    // helper function to calculate the slide distance based on media queries — it may be not necessary to change it
    function updateSlideDistance() {
        if (window.matchMedia('(max-width: 480px)').matches) {
            slideDistance = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sp--12')) * 1.55;
        } else if (window.matchMedia('(max-width: 767px) and (orientation: landscape)').matches) {
            slideDistance = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sp--12')) * 1.55;
        } else if (window.matchMedia('(max-width: 1024px)').matches) {
            slideDistance = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sp--12')) * 1.75;
        } else if (window.matchMedia('(max-width: 1440px)').matches) {
            slideDistance = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sp--12')) * 1.75;
        } else {
            slideDistance = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sp--12')) * 1.75;
        }
    }
    // update slide distance on page load and window resize
    updateSlideDistance();
    window.addEventListener('resize', updateSlideDistance);
});
// dynamic blog entries; adding a "read more" button that has the link of the entry
document.addEventListener('DOMContentLoaded', function () {
    var titles = document.querySelectorAll('.blog-shortcode-post-title');
    titles.forEach(function (title) {
        var link = title.querySelector('a');
        // get title chain
        var titleText = title.textContent.trim();
        // create new element without the link
        var newTitle = document.createElement('h3');
        newTitle.classList.add('blog-shortcode-post-title', 'entry-title');
        newTitle.textContent = titleText;
        // re-generate the link
        var readMoreLink = document.createElement('a');
        readMoreLink.classList.add('com-btn--link--function');
        readMoreLink.href = link.href;
        readMoreLink.textContent = 'Read article';
        // replace title
        title.parentNode.insertBefore(newTitle, title);
        title.parentNode.insertBefore(readMoreLink, title);
        title.parentNode.removeChild(title);
    });
});
// moving inside another container function -- read article link
document.addEventListener('DOMContentLoaded', function () {
    // serching for the element with the cass .ut-move-it--there
    const moveItThere = document.querySelector('.ut-move-it--there');
    // searching for the element with the class .ut--move-it-here
    const moveItHere = document.querySelector('.ut--move-it-here');
    // verifitying that both elements exist
    if (moveItThere && moveItHere) {
        // moving the element .ut-move-it--there inside the element .ut--move-it-here
        moveItHere.appendChild(moveItThere);
    }
});


// cloning homepage coupons in the navigation var
document.addEventListener('DOMContentLoaded', function () {
    // Function to recursively remove inline styles from an element and its children
    function removeAllInlineStyles(element) {
        element.removeAttribute('style');
        const childElements = element.children;
        for (let i = 0; i < childElements.length; i++) {
            removeAllInlineStyles(childElements[i]);
        }
    }

    function removeAllClassesExcept(element, keepClass) {
        const classes = element.classList;
        for (let i = classes.length - 1; i >= 0; i--) {
            const className = classes[i];
            if (className !== keepClass) {
                element.classList.remove(className);
            }
        }
    }

    function cloneImageElement(couponClonableClass, couponDestinationClass) {
        const cloneTargets = document.querySelectorAll(couponDestinationClass);
        const elementsToClone = document.querySelectorAll(couponClonableClass);
        cloneTargets.forEach((cloneTarget) => {
            elementsToClone.forEach((elementToClone) => {
                // Locate the 'fusion-image-element' within the element to clone
                const imageElementToClone = elementToClone.querySelector('.fusion-image-element');
                if (imageElementToClone) {
                    // Locate the 'st--col--1' within the clone target
                    const imageCloneDestination = cloneTarget.querySelector('.st--col--1');
                    if (imageCloneDestination) {
                        // Clone the image element
                        const clonedImageElement = imageElementToClone.cloneNode(true);
                        // Remove all inline styles
                        removeAllInlineStyles(clonedImageElement);
                        // Add class to the cloned image
                        clonedImageElement.classList.add('com-img--nav_coupon');
                        // Append the cloned image element to 'st--col--1'
                        imageCloneDestination.appendChild(clonedImageElement);
                    }
                }
            });
        });
    }

    function cloneContentElements(couponClonableClass, couponDestinationClass) {
        const cloneTargets = document.querySelectorAll(couponDestinationClass);
        const elementsToClone = document.querySelectorAll(couponClonableClass);
        let isFirstTitle = true;
        cloneTargets.forEach((cloneTarget) => {
            elementsToClone.forEach((elementToClone) => {
                // Locate the 'fusion-title' and 'fusion-button' elements within the element to clone
                const contentElementsToClone = elementToClone.querySelectorAll('.fusion-title, .fusion-button');
                if (contentElementsToClone) {
                    // Locate the 'st--col--2' within the clone target
                    const contentCloneDestination = cloneTarget.querySelector('.st--col--2');
                    if (contentCloneDestination) {
                        contentElementsToClone.forEach((contentElementToClone) => {
                            // Clone the content element
                            const clonedContentElement = contentElementToClone.cloneNode(true);
                            // If the cloned element is a 'fusion-title', remove all classes except 'title'
                            if (clonedContentElement.classList.contains('fusion-title')) {
                                removeAllClassesExcept(clonedContentElement, 'title');
                                // Add the 't-ff--p' class
                                clonedContentElement.classList.add('t-ff--p');
                                // If it's the first title, add the 'c-el--secondary' and 'ut-menu--card_title' classes
                                if (isFirstTitle) {
                                    clonedContentElement.classList.add('c-el--secondary', 'ut-menu--card_title');
                                    isFirstTitle = false;
                                } else {
                                    // For the second 'title', add the 'ut-menu--card_paragraph' class
                                    clonedContentElement.classList.add('ut-menu--card_paragraph');
                                }
                            }
                            // If the cloned element is a 'fusion-button', locate the 'fusion-button-text' and add the 't-t--n', 't-fs--normal' and 'ts--nav--normal' classes
                            if (clonedContentElement.classList.contains('fusion-button')) {
                                const fusionButtonText = clonedContentElement.querySelector('.fusion-button-text');
                                if (fusionButtonText) {
                                    fusionButtonText.classList.add('t-t--n', 't-fs--normal', 'ts--nav--normal');
                                    // Remove the 'com-btn--link--alt' class and replace with 'com-btn--link--alt--nav_coupon'
                                    clonedContentElement.classList.remove('com-btn--link--alt');
                                    clonedContentElement.classList.add('com-btn--link--alt--nav_coupon');
                                }
                            }
                            // Remove all inline styles
                            removeAllInlineStyles(clonedContentElement);
                            // Append the cloned content element to 'st--col--2'
                            contentCloneDestination.appendChild(clonedContentElement);
                        });
                    }
                }
            });
        });
    }
    cloneImageElement('.ut--clone-there--coupon', '.ut--clone-here--coupon');
    cloneContentElements('.ut--clone-there--coupon', '.ut--clone-here--coupon');
    cloneImageElement('.ut--clone-there--coupon--two', '.ut--clone-here--coupon--two');
    cloneContentElements('.ut--clone-there--coupon--two', '.ut--clone-here--coupon--two');
});
//
// cloning: testimonials from the homepage to the 2nd navigation bar
document.addEventListener('DOMContentLoaded', function () {
    // function to remove unwanted classes and styles from cloned content
    function removeUnwantedClassesAndStyles(element) {
        element.removeAttribute('style');
        element.classList.remove('fusion-layout-column', 'fusion-header', 'fusion-row');
        if (element.classList.contains('fusion-builder-row')) {
            element.classList.add('st--row', 'sp-ga--3', 'st-appdcl--mid');
        }
        const childElements = element.children;
        for (let i = 0; i < childElements.length; i++) {
            removeUnwantedClassesAndStyles(childElements[i]);
        }
        // find elements with the class .t-s--m and add the class .c-el--main if they don't contain the class .c-el--primary
        const elementsWithTSM = element.querySelectorAll('.t-s--m');
        elementsWithTSM.forEach((el) => {
            if (!el.classList.contains('c-el--primary')) {
                el.classList.add('c-el--main', 'sp-mt--3', 'sp-mb--5');
            }
        });
    }
    // function to clone the element ut--clone-there and append it to the element ut--clone-here
    function cloneElements(clonableClass, destinationClass, additionalClass = '') {
        const cloneTargets = document.querySelectorAll(destinationClass);
        const elementsToClone = document.querySelectorAll(clonableClass);
        cloneTargets.forEach((cloneTarget) => { // iterate through elements containing ut--clone-here
            elementsToClone.forEach((elementToClone) => { // iterate through elements containing ut--clone-there
                const clonedContent = elementToClone.cloneNode(true);
                // remove unwanted classes and styles from the cloned content
                removeUnwantedClassesAndStyles(clonedContent);
                // add additional class only for the cloned element ut--clone-there--testimonial-arrows
                if (additionalClass !== '' && clonedContent.classList.contains('ut--clone-there--testimonial-arrows')) {
                    const additionalElements = clonedContent.querySelectorAll('.sp-ga--3');
                    additionalElements.forEach((el) => {
                        el.classList.remove('sp-ga--3');
                        el.classList.add(additionalClass);
                    });
                }
                cloneTarget.appendChild(clonedContent);
            });
        });
    }
    // clone the element ut--clone-there into the place with class ut--clone-here
    cloneElements('.ut--clone-there', '.ut--clone-here');
    // clone the element ut--clone-there--testimonial-arrows into the place with class ut--clone-here--testimonial-arrows
    cloneElements('.ut--clone-there--testimonial-arrows', '.ut--clone-here--testimonial-arrows', 'sp-ga--1');
});
//the following function controls the behaviour of the testimonial slider of the navbar and the one in the homepage — although they share styles, classes and content, they work independently thanks to this function
document.addEventListener('DOMContentLoaded', function () {
    var btnRightAlt = document.querySelectorAll('.com-btn--right--alt');
    var btnLeftAlt = document.querySelectorAll('.com-btn--left--alt');
    var testimonialSelectors = [
        '.com-testimonial--one',
        '.com-testimonial--two',
        '.com-testimonial--three',
        '.com-testimonial--four',
        '.com-testimonial--five',
        '.com-testimonial--six',
        '.com-testimonial--seven',
        '.com-testimonial--eight',
        '.com-testimonial--nine',
        '.com-testimonial--ten',
        '.com-testimonial--eleven',
        '.com-testimonial--twelve'
    ];
    var currentIndex = Array.from({
        length: btnRightAlt.length
    }, () => 0);
    Array.from(btnRightAlt).forEach((btn, i) => {
        btn.addEventListener('click', function () {
            var currentSelector = testimonialSelectors[currentIndex[i]];
            var testimonials = document.querySelectorAll(currentSelector);
            testimonials[i].classList.add('hid');
            currentIndex[i] = (currentIndex[i] + 1) % testimonialSelectors.length;
            currentSelector = testimonialSelectors[currentIndex[i]];
            testimonials = document.querySelectorAll(currentSelector);
            testimonials[i].classList.remove('hid');
        });
    });
    Array.from(btnLeftAlt).forEach((btn, i) => {
        btn.addEventListener('click', function () {
            var currentSelector = testimonialSelectors[currentIndex[i]];
            var testimonials = document.querySelectorAll(currentSelector);
            testimonials[i].classList.add('hid');
            currentIndex[i] = (currentIndex[i] - 1 + testimonialSelectors.length) % testimonialSelectors.length;
            currentSelector = testimonialSelectors[currentIndex[i]];
            testimonials = document.querySelectorAll(currentSelector);
            testimonials[i].classList.remove('hid');
        });
    });
});
// prevent the submit button of the form to be clickable until all required fields are completed
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('gform_2');
    var submitButton = document.getElementById('gform_submit_button_2');
    // get fields tagged as required
    var requiredFields = form.querySelectorAll('.gfield_contains_required');
    // submit button disabled by default
    submitButton.disabled = true;
    submitButton.style.cursor = 'not-allowed';
    // checking required fields
    function checkRequiredFields() {
        var allFieldsFilled = true;
        // iteration over required fields
        requiredFields.forEach(function (field) {
            var input = field.querySelector('input, select, textarea');
            // double ckeck - looking for empty spaces (" ")
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });
        // enable/disable submit button based on previous scan
        submitButton.disabled = !allFieldsFilled;
        submitButton.style.cursor = submitButton.disabled ? 'not-allowed' : 'pointer';
    }
    // atatching event listeners
    requiredFields.forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        input.addEventListener('input', checkRequiredFields);
    });
});




document.addEventListener('DOMContentLoaded', function () {
    // Find the first article to move
    const articleToMove1 = document.querySelector('.fusion-posts-container .fusion-post-grid');
    // Find the image inside the first article
    const imgToMove1 = articleToMove1.querySelector('.fusion-image-wrapper');
    // Find the container where the image of the first article will be moved to in col-1
    const container1 = document.querySelector('.ut-move-it-here--blog .article-1 .col-1');
    // Find the element to move in col-2 of the first article
    const elementToMoveCol2_1 = articleToMove1.querySelector('.fusion-post-content.post-content');

    // Find the second article to move
    const secondArticleToMove = articleToMove1.nextElementSibling;
    // Find the image inside the second article
    const imgToMove2 = secondArticleToMove.querySelector('.fusion-image-wrapper');
    // Find the container where the image of the second article will be moved to in col-1
    const container2 = document.querySelector('.ut-move-it-here--blog .article-2 .col-1');
    // Find the element to move in col-2 of the second article
    const elementToMoveCol2_2 = secondArticleToMove.querySelector('.fusion-post-content.post-content');

    // Check if all elements exist
    if (articleToMove1 && imgToMove1 && container1 && elementToMoveCol2_1 && secondArticleToMove && imgToMove2 && container2 && elementToMoveCol2_2) {
        // Move the image of the first article to the first column of article-1
        const clonedImgToMove1 = imgToMove1.cloneNode(true);
        container1.insertBefore(clonedImgToMove1, container1.firstChild);
        // Move the element to col-2 of the first article
        const clonedElementToMoveCol2_1 = elementToMoveCol2_1.cloneNode(true);
        container1.nextElementSibling.insertBefore(clonedElementToMoveCol2_1, container1.nextElementSibling.firstChild);

        // Move the image of the second article to the first column of article-2
        const clonedImgToMove2 = imgToMove2.cloneNode(true);
        container2.insertBefore(clonedImgToMove2, container2.firstChild);
        // Move the element to col-2 of the second article
        const clonedElementToMoveCol2_2 = elementToMoveCol2_2.cloneNode(true);
        container2.nextElementSibling.insertBefore(clonedElementToMoveCol2_2, container2.nextElementSibling.firstChild);

        // Get the links of each article
        const link1 = clonedImgToMove1.querySelector('.fusion-rollover-link').getAttribute('href');
        const link2 = clonedImgToMove2.querySelector('.fusion-rollover-link').getAttribute('href');

        // Assign the links to the <article> elements
        container1.setAttribute('onclick', `window.location.href='${link1}'`);
        container2.setAttribute('onclick', `window.location.href='${link2}'`);
    }
});



window.addEventListener('load', function () {
    // Move potentially moved element to the receiver
    const cloneThereFeatured = document.querySelector('.clone-there--blog--featured');
    const cloneHereFeatured = document.querySelector('.clone-here--blog--featured');

    if (cloneThereFeatured && cloneHereFeatured) {
        cloneHereFeatured.appendChild(cloneThereFeatured);

        // Obtain all the articles inside the cloned element
        const articles = cloneHereFeatured.querySelectorAll('.fusion-post-grid');

        // Loop through each article and modify the "Read article" link
        articles.forEach((article) => {
            const readArticleLink = article.querySelector('a.com-btn--link--function');
            if (readArticleLink) {
                const articleLink = article.querySelector('.fusion-rollover-link');

                if (articleLink) {
                    const clonedReadArticleLink = readArticleLink.cloneNode(true);
                    articleLink.appendChild(clonedReadArticleLink);
                    readArticleLink.remove();
                }

                const articleLinkHref = article.querySelector('.fusion-rollover-link a');
                if (articleLinkHref) {
                    article.addEventListener('click', function () {
                        window.location.href = articleLinkHref.getAttribute('href');
                    });
                }
            }
        });
    }
});

