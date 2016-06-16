/*
 * Pour pouvoir utiliser plusieurs versions de Jquery : https://www.drupal.org/node/1058168
 * Utiliser jQuery normalement.
 * Trés bonne explication sur action du noConflict() : 
 * http://sundropsoftware.com/how-to-use-jquery-noconflict-the-right-way/
 */

(function ($) {
 jQuery(document).ready(function ()
    {
        //<!--Pour utiliser selectnav en RWD-->
        console.log('Chargement du script pour selectnav');
        selectnav('subnav', {label: '- Accès rapide -'});
    });
    

    jQuery(document).ready(function ()
    {

//OffCanvas avec fonction anonyme
        console.log('Chargement du script pour volet coulissant');
        var $transformer = $('.transformer'),
                $menuToggle = $('.menu-toggle');
        $('.menu-toggle').on('click', function (event) {
            event.preventDefault();
            $transformer.toggleClass('is-open');
        });

        $('.close-btn').on('click', function (event) {
            event.preventDefault();
            console.log('bouton referme volet fonctionne !');
            $transformer.removeClass('is-open');
        });
});



//// Script pour Masonry
// jQuery(document).ready(function (){
//        var $masonryContainer = $('.content-page-globale');
//        $masonryContainer.masonry({
//            columnWidth: '.masonry__column',
//            gutter: '.masonry__gutter',
//            itemSelector: '.masonry__item,.masonry--item'
//        });
//    });

    jQuery(window).load(function () {
        //Pour une galerie standard
        console.log('Chargement de Flexslider');
        $('.flexslider').flexslider({
            start: function(slider){
     $('body').removeClass('loading');
        $('.flexslider').resize();
    }
            //animation: "slide",
            
        });
    });
    
     jQuery(window).load(function () {
         //Pour une galerie avec des vignettes
        console.log('Chargement de FlexsliderThumbs');
        $('.flexslider-thumbs').flexslider({
            
            animation: "slide",
            controlNav: "thumbnails"
        });
    });
    
    //Pour le BxSlider
    jQuery(window).load(function (){
        console.log('Chargement de BxSlider');
  $('.bxslider').bxSlider();
   pagerCustom: '#bx-pager'
});
})(jQuery);