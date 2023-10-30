
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "40%";
    // document.getElementById("nav0").style.marginLeft = "150px";
    document.getElementById("bod").style.opacity = "0.9";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("nav0").style.marginLeft = "0";
    document.getElementById("bod").style.opacity = "1";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function startSlideshow() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 3000);
}

// startSlideshow();

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}


const buttonContainer = document.getElementById('buttons');
const originalButton = document.getElementById('pause');

// Create a new button element
const newButton = document.createElement('span');
newButton.textContent = '▶';
newButton.id = 'vbutton'

// Add a click event listener to the original button
originalButton.addEventListener('click', function () {
    // Replace the original button with the new button
    buttonContainer.replaceChild(newButton, originalButton);
    clearInterval(slideInterval);

});
newButton.addEventListener('click', function () {
    // Replace the original button with the new button
    buttonContainer.replaceChild(originalButton, newButton);

    startSlideshow();
});
startSlideshow();