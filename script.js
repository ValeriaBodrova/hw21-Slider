const images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg'
];

let currentImageIndex = 0;
const imgElement = document.getElementById('slider-img');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
prevButton.style.display = 'none'; 

nextButton.addEventListener('click', function() {
    imgElement.style.opacity = '0';
    setTimeout(() => {
        currentImageIndex++;
        if (currentImageIndex >= images.length - 1) {
            nextButton.style.display = 'none';
        }
        prevButton.style.display = '';
        imgElement.src = images[currentImageIndex];
        imgElement.style.opacity = '1';
    }, 500); 
});

prevButton.addEventListener('click', function() {
    imgElement.style.opacity = '0';
    setTimeout(() => {
        currentImageIndex--;
        if (currentImageIndex <= 0) {
            prevButton.style.display = 'none';
        }
        nextButton.style.display = '';
        imgElement.src = images[currentImageIndex];
        imgElement.style.opacity = '1';
    }, 500); 
});
