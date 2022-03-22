const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-content');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let counter = 1;
const size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

nextButton.addEventListener('click',()=>{
    if (counter >= sliderImages.length -1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

prevButton.addEventListener('click',()=>{
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

slider.addEventListener('transitionend', ()=>{
    if(sliderImages[counter].id == 'last-clone'){
        slider.style.transition = "none";
        counter = sliderImages.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
    if(sliderImages[counter].id == 'first-clone'){
        slider.style.transition = "none";
        counter = sliderImages.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
    }
})

setInterval(function() {
    nextButton.click();
}, 6500);