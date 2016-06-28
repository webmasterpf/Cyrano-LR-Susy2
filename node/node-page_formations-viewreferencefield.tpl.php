<?php
/* Ce template permet la création d'un layout multicolonne pour les pages de base, en permettant la disposition facile
 * des champs CCK custom, si nécessaires pour une page de base.
*/?>
<!--______________NODE TPL POUR POLE.TPL CUSTOM________________ -->
<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
 <div class="node-inner">
        <!--______________COLONNE 1________________ -->
 
        <div id="" class="col1_layout_max">
            <?php if ($title): /*copier le titre dans la colonne desirée*/?>
            <h1 class="titre_page_pole"><?php print $title; ?></h1>
            <?php endif; ?>
            
            <?php print $picture; ?>

            <?php if ($submitted): ?>
            <span class="submitted"><?php print $submitted; ?></span>
            <?php endif; ?>

            <div class="content">
                <?php   print $node->content['body']['#value'];/*déplacer le contenu dans la colonne désirée*/ ?>
            </div>
        </div>    
              <!--______________COLONNE 1________________ -->
 <?php /* affichage des pôles via un champ viewreference avec arguments.Les arguments sont modifiables via le BO 
        de la page formations du site.Chaque colonne affiche une seule clé/valeur du tableau du champ CCK.
 */
 ?>     
        <div id="colonne-1"  class="layout_4col_all3 page-pole">
 
            <?php if ($node->field_pole_metier[0]['view']): ?>
            <div id="nom-css">
                    <?php  print $node->field_pole_metier[0]['view']  ?>
            </div>
            <?php endif;?>
        </div>
        <!--______________COLONNE 2________________ -->
         <!-- <pre> <?php //print_r($node); ?> </pre>-->   <!-- listage des variables du $content -->
        <div id="colonne-2" class="layout_4col_all3">
            
        <?php if ($node->field_pole_metier[1]['view']): ?>
            <div id="nom-css">
                    <?php  print $node->field_pole_metier[1]['view']  ?>
            </div>
            <?php endif;?>
        </div>

        <!--______________COLONNE 3________________ -->
        <div id="colonne-3"  class="layout_4col_all3 page-pole">
            
    <?php if ($node->field_pole_metier[2]['view']): ?>
            <div id="nom-css">
                    <?php  print $node->field_pole_metier[2]['view']  ?>
            </div>
            <?php endif;?>
            
        </div>
             <!--______________COLONNE 4________________ -->
             <div id="colonne-4"  class="layout_4col_all3last page-pole">
            
                   
            <?php if ($node->field_pole_metier[3]['view']): ?>
            <div id="nom-css">
                    <?php  print $node->field_pole_metier[3]['view']  ?>
            </div>
            <?php endif;?>
        </div>
                 

    </div> <!-- /node-inner -->
</div> <!-- /node-->