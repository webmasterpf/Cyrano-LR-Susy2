<?php
/**
 * @file views-view-list.tpl.php
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 * 
 * Flexslider avec thumbnails + caption
 */
?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  
     <!-- Construction de la liste principale -->
     <div id="slider" class="flexslider">
         <?php print $list_type_prefix; ?>
     
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
      
     <?php print $list_type_suffix; ?>
      </div>
      <!-- Construction de la liste miniatures -->
      <div id="carousel" class="flexslider">
          <?php print $list_type_prefix; ?>
      
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>
      
  <?php print $list_type_suffix; ?>
      </div>
<?php print $wrapper_suffix; ?>