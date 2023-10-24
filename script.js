const images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg'
];

let currentImageIndex = 0;
const imgElement = document.getElementById('slider-img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let isAnimating = false;
prevButton.style.display = 'none'; 

function switchImage() {
    imgElement.style.opacity = '0';
    setTimeout(() => {
        if (currentImageIndex >= images.length - 1) {
            nextButton.style.display = 'none';
        } else if (currentImageIndex <= 0) {
            prevButton.style.display = 'none';
        } else {
            nextButton.style.display = '';
            prevButton.style.display = '';
        }

        imgElement.src = images[currentImageIndex];
        imgElement.style.opacity = '1';
        isAnimating = false;  // завершення анімації
    }, 500);
}

nextButton.addEventListener('click', function() {
    if (isAnimating) return;  // якщо анімація триває, вихід
    isAnimating = true; 
    currentImageIndex++;
    switchImage();
});

prevButton.addEventListener('click', function() {
    if (isAnimating) return;  // якщо анімація триває, вихід
    isAnimating = true; 
    currentImageIndex--;
    switchImage();
});