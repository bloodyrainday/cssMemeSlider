const images = document.querySelectorAll('.slider-line-image');
const sliderLineImages = document.querySelector('.slider-line-images');
const switchButton1 = document.getElementById('image-1');
const switchButton2 = document.getElementById('image-2');
const switchButton3 = document.getElementById('image-3');
const switchButton4 = document.getElementById('image-4');
const switchButton5 = document.getElementById('image-5');
const switchButton6 = document.getElementById('image-6');
const switchButton7 = document.getElementById('image-7');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLineImages.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    console.log(width);
    switchSlider()
}

window.addEventListener('resize', init)
init()

switchButton1.addEventListener('click', () => {
    count--;
    if (count > 0 || count < 0) {
        count = 0
    }
    
    switchSlider();
})

switchButton2.addEventListener('click', () => {
    count++;
    if (count > 1 || count < 1) {
        count = 1
    };
    
    switchSlider()
})

switchButton3.addEventListener('click', () => {
    count++;
    if (count > 2 || count < 2) {
        count = 2
    };
    
    switchSlider()
})

switchButton4.addEventListener('click', () => {
    count++;
    if (count > 3 || count < 3) {
        count = 3
    };
    
    switchSlider()
})

switchButton5.addEventListener('click', () => {
    count++;
    if (count > 4 || count < 4) {
        count = 4
    };
    
    switchSlider()
})

switchButton6.addEventListener('click', () => {
    count++;
    if (count > 5 || count < 5) {
        count = 5
    };
    
    switchSlider()
})

switchButton7.addEventListener('click', () => {
    count++;
    if (count > 6 || count < 6) {
        count = 6
    };
    
    switchSlider()
})

function switchSlider() {
    sliderLineImages.style.transform = 'translate(-' + count * width + 'px)';
}