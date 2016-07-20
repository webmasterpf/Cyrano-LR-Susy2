<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 * 
 * Pour le ninja-slider
 * <ul style="overflow: hidden; padding-top: 50%; height: 0px;">
<li style="left: 0px; z-index: 1;" class="ns-show">
<a style="background-image: url(&quot;/slider/ninja-slider/img/1.jpg&quot;);" class="ns-img" href="/slider/ninja-slider/img/1.jpg">
</a>

</li>
 * </ul>


 */
?>
<!-- Template Ninja Slider -->
    <?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
  <!-- Construction de la liste principale -->
  <div class="slider-inner">
      <ul>
<?php foreach ($rows as $id => $row): ?>
  <li class="<?php print $classes[$id]; ?>">
    <?php print $row; ?>
  </li>
<?php endforeach; ?>
</ul>
        </div>
  <!-- Construction de la liste thumbnails -->
  <div id="thumbnail-slider">
          <ul>
<?php foreach ($rows as $id => $row): ?>
  <li class="<?php print $classes[$id]; ?>">
    <?php print $row; ?>
  </li>
<?php endforeach; ?>
</ul>
      
  </div>
  
<?php 
   drupal_set_message(print_r($fields->field_galerie_image_vdl, TRUE));
   drupal_set_message(print_r($fields->field_galerie_image_vdl_fid_1, TRUE));
//print '<pre>'.print_r($row, TRUE).' </pre>';
//print '<pre>'.print_r($fields, TRUE).' </pre>';
?>
