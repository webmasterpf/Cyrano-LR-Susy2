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

  //Pour stacktable (tableaux RWD)
    jQuery(window).load(function (){
        console.log('Chargement de Stacktable.js');
        //Ajouter l'ID de la table à rendre RWD
  //Cible toutes les tables contenues dans la div.content (colonne-2)
  $('div.content').children('table') .stacktable();
});

jQuery(document).ready(function ()
    {
        //<!-- Pour ajouter classes sur éléments du tableau -->
        console.log('Actions sur divers éléments : tableaux, images...');
       //Ajout des classes pour styler les tableaux
$('table tr:odd').addClass('odd');
$('table tr:even') .addClass('even');

//Action sur taille des images : retrait de toutes les tailles en dur (HTML) de manière ciblée
 //$('img').each(function(){
    $('.fiche-formation img').each(function(){
 $(this).removeAttr('width');
 $(this).removeAttr('height');
 });

//Changer la casse des titres H1 qui sont en Majuscule
$('h1').css('text-transform','lowercase');

//Retirer les style en ligne issus de copier/coller
        $("#colonne-2 span").removeAttr("style");
        $("#colonne-2 p").removeAttr("style");
        $("#colonne-2 ul").removeAttr("style");
    });
    
//// Script pour Masonry - Views casse les __ utiliser -- plutôt
//jQuery.noConflict();
    jQuery(document).ready(function () {
        console.log('Chargement des paramètres Masonry.js');
        'use strict';
        var $masonryContainer = $('.mansonry');
        $masonryContainer.imagesLoaded(function () {
            $masonryContainer.masonry({
                itemSelector: '.masonry--item',
                columnWidth: '.masonry--column',
                gutter: '.masonry--gutter'
                
            });
        });
    });

})(jQuery);