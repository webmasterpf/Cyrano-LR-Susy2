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


//Pour une galerie standard : Flexslider
    jQuery(window).load(function () {
                console.log('Chargement des paramètres de Flexslider');
        $('.flexslider-classic').flexslider({
            //animation: "slide",
            directionNav: true,
            controlNav: false,
            start: function(slider){
     $('body').removeClass('loading');
        $('.flexslider-classic').resize();
        
    }
            
        });
    });
    
         //Pour une galerie avec des vignettes : Flexslider thumbs
     jQuery(window).load(function () {
            console.log('Chargement des paramètres de FlexsliderThumbs');
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 210,
            itemMargin: 5,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
    });
    
    //Pour le BxSlider
    jQuery(window).load(function (){
        console.log('Chargement des paramètres de BxSlider');
  $('.bxslider').bxSlider();
   pagerCustom: "#bx-pager"
   captions: true;
});


//Pour Galerie BaguetteBox.js
    jQuery(document).ready(function () {
        console.log('Appel du script BaguetteBox.js');
        baguetteBox.run('.galerieBaguetteBox', {
            // Custom options
        });

    });

  //Pour stacktable (tableaux RWD)
    jQuery(window).load(function (){
        console.log('Chargement des paramètres de Stacktable.js');
        //Ajouter l'ID de la table à rendre RWD
  //Cible toutes les tables contenues dans la div.content (colonne-2)
  $('div.content').children('table') .stacktable();
});

//Slick Basic, nav par points, transition fade
jQuery(document).ready(function ()
 {
 $('.slickdiapofade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
}); 

//Pour utiliser Slick avec une nav par miniatures (thumbs)
jQuery(document).ready(function ()
 {
   $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
}); 
//// Script pour Masonry - Views casse les __ utiliser -- plutôt

//    jQuery(document).ready(function () 
    jQuery(window).on('load', function()
    {
        console.log('Chargement des paramètres Masonry.js');
        'use strict';
        var $masonryContainer = $('.masonry');
        //$masonryContainer.imagesLoaded(function () {
            $masonryContainer.masonry({
                itemSelector: '.masonry--item',
                columnWidth: '.masonry--column',
                gutter: '.masonry--gutter',
                //percentPosition: true

            });
       // });
        //GoogleFont cause un problème avec Masonry
        (function () {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                    '://ajax.googleapis.com/ajax/libs/webfont/1.4.2/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    
    });
//// Script pour Wookmark (liste html)
jQuery(document).ready(function ()
{
  console.log('Chargement des paramètres Wookmark.js');   
$('#wookmark-id li').wookmark({
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            container: $('#tiles'), // Optional, used for some extra CSS styling
            offset: 2, // Optional, the distance between grid items
            itemWidth: 210 // Optional, the width of a grid item
        });
 
 window.onresize = function(event) {
     $('#wookmark-id li').wookmark({offset: 2});
 }
  });
  
//jQuery(document).ready(function ()
jQuery(window).on('load', function()
    {
        //<!-- Pour ajouter classes sur éléments du tableau -->
        console.log('Actions sur divers éléments : tableaux, images...');
       //Ajout des classes pour styler les tableaux
$('table tr:odd').addClass('odd');
$('table tr:even') .addClass('even');
//Ajout d'attributs pour mur image JS
$('#liste-vdl ul.wookmark').attr("id", "wookmark-id");
$('#liste-vdl div.view-content').attr("id","grid");
$('#liste-vdl div.view-content').attr("data-columns","");



//Action sur taille des images : retrait de toutes les tailles en dur (HTML) de manière ciblée
 //$('img').each(function(){
    $('.fiche-formation img').each(function(){
 $(this).removeAttr('width');
 $(this).removeAttr('height');
 });
 //si dans attribut style,alors il faut régler la valeur sur auto (views slideshow,mais taille overrider,
 //solution ajouter un max-width
 
$('.diapo_fiche div.views_slideshow_cycle_teaser_section').css({
  'max-width':'100%',
  'height':'auto',
  'width':'auto'
  
});
 

//Changer la casse des titres H1 qui sont en Majuscules
$('h1').css('text-transform','lowercase');
$('h1.titre-lycee').css('text-transform','none');
$('h1.titre_ficheform').css('text-transform','none');

$('.titre-vdl a').css('text-transform','lowercase');
$('#liste-vdl span.titre-vdl > a').css('text-transform','lowercase');

//Retirer les style en ligne issus de copier/coller
        $("#colonne-2 span").removeAttr("style");
        $("#colonne-2 p").removeAttr("style");
        $("#colonne-2 ul").removeAttr("style");
        $(".masonry-brick").removeAttr("style");//pas d'effet
//Hauteur de l'iframe selon son contenu
//pas utile,voir CSS avec min-height pour solution
$('.page-lycee iframe').css({
  'overflow':'hidden',
  'height':'100%'
 });

});

// Pour MixItUp plugin: voir le fichier ajout.classes.mixitup.js
// Calling the MixItUp plugin for this View.
    jQuery(window).load(function () {
        console.log('Chargement de Mixitup');
        $('.mixitup').mixItUp();
    });

})(jQuery);