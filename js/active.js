 $('#counter-block').ready(function () {
     $('.client').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 1,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
     });

     $('.our_cuauses_single').owlCarousel({
         loop: true,
         margin: 50,
         nav: true,
         items: 3,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             992: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         },
     });
  
     $('.about_cards').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 3,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             1400: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             768: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 2,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 1,
                 nav: true,
                 loop: true
             }
         },
     });
 });
