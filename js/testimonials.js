$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 10,
        center: true,
        nav: false,
        margin: 50,
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            480: { items: 3 },
            575: { items: 3 },
            768: { items: 3 },
            991: { items: 3 },
            1200: { items: 3 }
        }
    });
});