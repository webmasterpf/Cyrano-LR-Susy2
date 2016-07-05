<?php
/* Ce template sert à overrider l'affichage des listes habituel pour présenter un mur d'images
*/?>
<!--______________NODE TPL POUR PAGE VIE LYCEE.TPL CUSTOM________________ -->
<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
    <div class="node-inner">
        <!--______________COLONNE 1________________ -->
       
         <!-- <pre> <?php //print_r($node); ?> </pre>-->   <!-- listage des variables du $content -->
        <div id="colonne-1" class="col1_layout_max vie-lycee">
       <?php if ($title): /*copier le titre dans la colonne desirée*/?>
            <h1 class="titre_page_vdl"><?php print $title; ?></h1>
            <?php endif; ?>
            <?php print $picture; ?>

            <?php if ($submitted): ?>
            <span class="submitted"><?php print $submitted; ?></span>
            <?php endif; ?>

            <div class="content">
                <?php   print $node->content['body']['#value'];/*déplacer le contenu dans la colonne désirée*/ ?>
           
                  <?php if ($node->field_vue_content[0]['view']): ?>
            <div id="liste-vdl">
                    <?php  print $node->field_vue_content[0]['view']  ?>
            </div>
            <?php endif;?>
                
               <?php
           global $theme_path;
              include ($theme_path.'/includes/regions_inc/inc_region_col_1.php');
              ?>       
                
            </div>
              <?php if ($terms): ?>
        <div class="taxonomy"><?php //print $terms; ?></div>
        <?php endif;?>

        <?php if ($links): ?>
        <div class="links"> <?php //print $links; ?></div>
        <?php endif; ?>

        </div>

            

    </div> <!-- /node-inner -->
</div> <!-- /node-->