document.addEventListener('DOMContentLoaded', function () {

    var priceWrapper = document.querySelectorAll('.price-wrapper > button');

    for (var i = 0; i < priceWrapper.length; i++) {
        priceWrapper[i].addEventListener('click', function () {
            for (var j = 0; j < priceWrapper.length; j++) {
                priceWrapper[j].parentElement.classList.remove('price-wrapper-active');
            }
            this.parentElement.classList.add('price-wrapper-active');
        })
    }

});