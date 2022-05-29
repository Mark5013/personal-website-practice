const closeButton = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');

const openButton = document.querySelector('.open-nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
});

$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });
});
