<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 * 
 * 
 * <ul class="bxslider">
  <li><img src="/images/730_200/tree_root.jpg" /></li>
  <li><img src="/images/730_200/houses.jpg" /></li>
  <li><img src="/images/730_200/hill_fence.jpg" /></li>
</ul>

<div id="bx-pager">
  <a data-slide-index="0" href=""><img src="/images/thumbs/tree_root.jpg" /></a>
  <a data-slide-index="1" href=""><img src="/images/thumbs/houses.jpg" /></a>
  <a data-slide-index="2" href=""><img src="/images/thumbs/hill_fence.jpg" /></a>
</div>
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
  <!-- Construction de la liste -->
  <ul class="bxslider">
<?php foreach ($rows as $id => $row): ?>
  <li class="<?php print $classes[$id]; ?>">
    <?php print $row; ?>
  </li>
<?php endforeach; ?>
</ul>
  <div id="bx-pager">
      <?php// foreach ($rows as $id => $row): ?>

    <?php print ($fields['field_galerie_image_vdl_fid_1']->content); ?>
 
<?php //endforeach; ?>
</div>
<?php 
 //  drupal_set_message(print_r($node->field_galerie_image_vdl, TRUE));
//print '<pre>'.print_r($row, TRUE).' </pre>';
?>
