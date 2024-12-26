$(document).ready(function(){
    $('.slider-container').slick({
      slidesToShow: 8, /* Número de cards visíveis por vez */
      slidesToScroll: 1, /* Número de cards a rolar por clique */
      arrows: true, /* Habilita botões de navegação */
      prevArrow: $('.prev-btn'), /* Elemento do botão anterior */
      nextArrow: $('.next-btn'), /* Elemento do botão seguinte */
    });
});