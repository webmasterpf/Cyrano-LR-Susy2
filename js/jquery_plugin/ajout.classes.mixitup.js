jQuery(window).on('load', function () {
// // Selecting from every list item in the View the values that match the filters
//  (the practice areas and surname each list item is showing) and adding to this list item these values as classes.
    $('ul.mixitup li').each(function () {

        $(this).find('span.vdl-tag').each(function () {

            var str = $(this).text();

            str = str.trim().replace(/\s+/g, '-').toLowerCase().replace('&', 'a');

            $(this).closest('li.item').addClass(str);

        });

        $(this).find('div.img-vdl').each(function () {

            var str = $(this).text();

            str = str.trim().replace(/\s+/g, '-').toLowerCase().replace('&', 'a');

            $(this).closest('li').addClass(str);

        });

    });

// Adding to every option in the exposed filters, the class "filter" and the attribute "data-filter" 
// with the value defined in the option's value 
// Practice Areas dropdown.
    $('#edit-tid option').each(function () {

        $(this).addClass('filter');

        var str = $(this).text();

        str = str.trim().replace(/\s+/g, '-').toLowerCase().replace('&', 'a');

        $(this).attr('data-filter', str);

    });

// Triggerring the "click" event when an option is selected, for the MixItUp to handle the filtering.
    $('#edit-tid').change(function () {

        $(this).find('option:selected').trigger('click');

    });
//Activation du plugin dans le fichier js_jquery_new
});