document.addEventListener('DOMContentLoaded', function () {
    

    var arrowRight = document.querySelector('.arrow-right');
    var arrowLeft = document.querySelector('.arrow-left');
    var slides = document.querySelectorAll('.carousel-wrapper > .slide');
    var activeIndex = 0;
    
    var priceWrapper = document.querySelectorAll('.price-wrapper > button');

    /*------------------------------------------------
      SLIDER
    ------------------------------------------------*/
    

    arrowRight.addEventListener('click', function () {
        slides[activeIndex].classList.remove('slide-active');
        activeIndex++;
        if (activeIndex > slides.length -1) {
            activeIndex = 0;
        }
        slides[activeIndex].classList.add('slide-active');
    });

    arrowLeft.addEventListener('click', function () {
        slides[activeIndex].classList.remove('slide-active');
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = slides.length -1;
        }
        slides[activeIndex].classList.add('slide-active');
    });

    /*------------------------------------------------
      PRICE SET
    ------------------------------------------------*/

    
    for (var i = 0; i < priceWrapper.length; i++) {
        priceWrapper[i].addEventListener('click', function () {
            for (var j = 0; j < priceWrapper.length; j++) {
                priceWrapper[j].parentElement.classList.remove('price-wrapper-active');
            }
            this.parentElement.classList.add('price-wrapper-active');
        })
    }

});