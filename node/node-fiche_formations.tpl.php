<?php
/* Ce template permet la création d'un layout multicolonne pour les pages de base, en permettant la disposition facile
 * des champs CCK custom, si nécessaires pour une page de base.
*/?>
<!--______________NODE TPL POUR PAGE.TPL CUSTOM________________ -->
<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
    <div class="node-inner">
        <!--______________COLONNE 1________________ -->
        <div id="colonne-1" class="col1_layout_3_9 fiche-formation">
            <?php if ($title): /*copier le titre dans la colonne desirée*/?>
            <h1 class="titre_ficheform"><?php print $title; ?></h1>
            <?php endif; ?>
  
                <?php if ($node->field_complement_info_formation[0]['view']): ?>

                <div class="complement_titre_fiche"><?php  (print $node->field_complement_info_formation[0]['view']); /*Info complementaire sur formation*/ ?></div>

            <?php endif; ?>

                
                
                <?php if ($node-> field_programme_formation[0]['view'] ):?>
                <div class="programme">
                <?php  print $node->content['field_programme_formation']['field']['#title'] ?>
                <?php print $node-> field_programme_formation[0]['view'] ?>
                </div> 
               <?php endif; ?>
                
                    <?php
                    /* 06/2015 Liste les fichiers à partir du tableau créé
                     * création d'une liste dynamique 
                     */
                    if (!empty($node->field_lien_ficheform[0]['view'])): ?>
                <div class="lien-ficheform">
               <?php  print $node->content['field_lien_ficheform']['field']['#title'] ?>
                    <ul>
               <?php
               foreach ($node->field_lien_ficheform as $key => $lien) {
                    print '<li>'.$node->field_lien_ficheform[$key]['view'].'</li>';
               }
               ?>  
                  </ul>   </div>
            <?php endif;?>
            
                 <?php
           global $theme_path;
              include ($theme_path.'/includes/regions_inc/inc_region_col_1.php');
              ?>
        </div><!-- /colonne1 -->
        <!--______________COLONNE 2________________ -->
         <!-- <pre> <?php //print_r($node); ?> </pre>-->   <!-- listage des variables du $content -->
        <div id="colonne-2" class="col2_layout_3_9 fiche-formation">

            <?php print $picture; ?>

            <?php if ($submitted): ?>
            <span class="submitted"><?php print $submitted; ?></span>
            <?php endif; ?>

            <div class="content">
                
                          <?php //affichage diaporama views inclue via CCK
                          if ($node->field_diapo_ficheform[0]['view']): ?>
                   <div class="diapo_fiche">
                        <?php print $node->field_diapo_ficheform[0]['view'] ?>
                       </div>
                    <?php endif; ?>  
                
                <?php   print $node->content['body']['#value'];/*déplacer le contenu dans la colonne désirée*/ ?>
            </div>

        </div><!-- /colonne2 -->

   

        <?php if ($terms): ?>
        <div class="taxonomy"><?php //print $terms; ?></div>
        <?php endif;?>

        <?php if ($links): ?>
        <div class="links"> <?php //print $links; ?></div>
        <?php endif; ?>

    </div> <!-- /node-inner -->
</div> <!-- /node-->