const images = [
    './img/meme1.jpg',
    './img/meme2.jpg',
    './img/meme3.jpg',
    './img/meme4.jpg',
    './img/meme5.jpg',
    './img/meme6.jpg',
    './img/meme7.jpg',
    './img/meme8.jpg',
    './img/meme9.jpg'
];

let currentImageIndex = 0;
const imgElement = document.getElementById('slider-img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length - 1) {
        nextButton.style.display = 'none';
    }
    
    prevButton.style.display = '';
    imgElement.src = images[currentImageIndex];
});

prevButton.addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex <= 0) {
        prevButton.style.display = 'none';
    }
    
    nextButton.style.display = '';
    imgElement.src = images[currentImageIndex];
});