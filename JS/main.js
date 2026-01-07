//Listeyi çekiyoruz
const slides = document.querySelectorAll('.hero-slide');
const heroContent = document.querySelector('.hero-content');
//Başlangıcı belirliyoruz
let slideIndex = 0;
//Döngüde mevcut slide kapanıp yeni slide yüklenmesi oluyor
setInterval(() => {

    slides[slideIndex].classList.remove('is-active')
    heroContent.classList.remove('is-animating')
    heroContent.offsetHeight;
    slideIndex++;

    
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add('is-active')
    setTimeout(() => {
        heroContent.classList.add('is-animating');
    },300);
    
    console.log(slideIndex);
}, 5000);