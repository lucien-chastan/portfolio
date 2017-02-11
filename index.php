<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Lucien Chastan - Portfolio</title>
        <meta name="description" content="Lucien chastan est un développeur Web back et frontend">
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="mon_fav_icone">

        <meta property="og:title" content="titre"/>
        <meta property="og:description" content="description"/>
        <meta property="og:url" content="http://www.mon-lien.fr" />
        <meta property="og:image" content="http://www.mon-lien.fr" />
        <meta property="og:type" content="website"/>

        <!--Leaflet-->
        <link rel="stylesheet" href="css/leaflet.css" />
        <script src="js/leaflet.js"></script>

        <!--DomWork JS : mon framework, plus d'info sur github : https://github.com/lucien-chastan/DomWork-->
        <!--permet des raccourics de selection à la jQuery et simplifie la manipulation du DOM-->
        <script src="js/DomWork.js"></script>
        
        <!--Materialize-->
<!--
        <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/js/materialize.min.js"></script>
-->
        
        <!--Script Js et Css-->
        <link href="css/lucien.css" rel="stylesheet">
        
    </head>
    <body>
        <main id="mainContain">
            
            <!--Menu-->
            <nav class="myNav" id="myNav">
                <a href="/" class="active">Map</a>
                <a href="contact.php">Me contacter</a>
            </nav>
            
            <!--Parcours-->
            <div class="contenu-for-map" id="htmlProfil"><?php include('popup/parcours/profil.html');?></div>
            <div class="contenu-for-map" id="htmlMiw"><?php include('popup/parcours/miw.html');?></div>
            <div class="contenu-for-map" id="htmlCritt"><?php include('popup/parcours/critt.html');?></div>
            <div class="contenu-for-map" id="htmlArbre"><?php include('popup/parcours/arbre.html');?></div>
            
            <!--JS-->
            <div class="contenu-for-map" id="htmlGrunt"><?php include('popup/js/grunt.html');?></div>
            <div class="contenu-for-map" id="htmlChartjs"><?php include('popup/js/chartjs.html');?></div>
            <div class="contenu-for-map" id="htmlJavascript"><?php include('popup/js/javascript.html');?></div>
            <div class="contenu-for-map" id="htmlLeaflet"><?php include('popup/js/leaflet.html');?></div>
            
            <!--Expérience-->
            <div class="contenu-for-map" id="htmlDomwork"><?php include('popup/experience/domwork.html');?></div>
            <div class="contenu-for-map" id="htmlIziski"><?php include('popup/experience/iziski.html');?></div>
            
            <!--Projet-->
            <div class="contenu-for-map" id="htmlMontjoux"><?php include('popup/projet/montjoux.html');?></div>
            <div class="contenu-for-map" id="htmlOblyk"><?php include('popup/projet/oblyk.html');?></div>
            <div class="contenu-for-map" id="htmlSance"><?php include('popup/projet/sance.html');?></div>
            
            <!--css-->
            <div class="contenu-for-map" id="htmlBootstrap"><?php include('popup/css/bootstrap.html');?></div>
            <div class="contenu-for-map" id="htmlBulma"><?php include('popup/css/bulma.html');?></div>
            <div class="contenu-for-map" id="htmlCss"><?php include('popup/css/css.html');?></div>
            <div class="contenu-for-map" id="htmlMaterialize"><?php include('popup/css/materialize.html');?></div>
            
            <!--Desktop-->
            <div class="contenu-for-map" id="htmlVba"><?php include('popup/desktop/vba.html');?></div>
            <div class="contenu-for-map" id="htmlVbnet"><?php include('popup/desktop/vbnet.html');?></div>
                        
            <!--Graphisme-->
            <div class="contenu-for-map" id="htmlInkscape"><?php include('popup/graphisme/inkscape.html');?></div>
            <div class="contenu-for-map" id="htmlGimp"><?php include('popup/graphisme/gimp.html');?></div>
            <div class="contenu-for-map" id="htmlSolidworks"><?php include('popup/graphisme/solidworks.html');?></div>
            
            <!--Html-->
            <div class="contenu-for-map" id="htmlHtml"><?php include('popup/html/html.html');?></div>
            
            <!--Outils-->
            <div class="contenu-for-map" id="htmlGit"><?php include('popup/outil/git.html');?></div>
            <div class="contenu-for-map" id="htmlLinux"><?php include('popup/outil/linux.html');?></div>
            
            <!--Passions-->
            <div class="contenu-for-map" id="htmlEscalade"><?php include('popup/passion/escalade.html');?></div>
            <div class="contenu-for-map" id="htmlOpensource"><?php include('popup/passion/opensource.html');?></div>
            
            <!--Php et MySql-->
            <div class="contenu-for-map" id="htmlMysql"><?php include('popup/php_mysql/mysql.html');?></div>
            <div class="contenu-for-map" id="htmlPhp"><?php include('popup/php_mysql/php.html');?></div>
            
            <!--CMS-->
            <div class="contenu-for-map" id="htmlDrupal"><?php include('popup/cms/drupal.html');?></div>
            
            <!--Carte-->    
            <div id="MyCarte" class="MyCarte"></div>
        </main>
        <script src="js/lucien.js"></script>
    </body>
</html>