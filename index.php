<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title>Lucien Chastan | Développeur Web</title>
        <meta name="description" content="Portfolio de Lucien chastan développeur Web full-stack, javascript, php, html/css">
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="img/fav-icone.png">

        <meta property="og:title" content="Lucien Chastan | Développeur Web"/>
        <meta property="og:description" content="Portfolio de Lucien chastan développeur Web full-stack, javascript, php, html/css"/>
        <meta property="og:url" content="http://www.lucien-chastan.fr" />
        <meta property="og:image" content="http://www.mon-lien.fr" />
        <meta property="og:type" content="website"/>

        <!--Leaflet-->
        <link rel="stylesheet" href="css/leaflet.css" />
        <script src="js/leaflet.js"></script>

        <!--DomWork JS : mon framework, plus d'info sur github : https://github.com/lucien-chastan/DomWork-->
        <!--permet des raccourics de selection à la jQuery et simplifie la manipulation du DOM-->
        <script src="js/DomWork.js"></script>

        <!--Script Js et Css-->
        <link href="css/lucien.css" rel="stylesheet">

    </head>
    <body>
        <main id="mainContain">

            <!--Menu-->
            <nav class="myNav" id="myNav">
                <a class="lienImg" href="/">
                    <img src="img/logo-lucien-blanc.svg" height="30px">
                    <!--
<svg viewBox="0 0 128.59336 91.592259" height="25.849371mm" width="36.291904mm" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
<g transform="translate(-15.703315,-57.994647)" >
<path d="m 91.341017,96.631211 -29.84158,-29.84157 -37.001129,37.001139 37.001129,37.00113 49.334853,-49.334839 24.6674,24.667409 -24.6674,24.66743 -17.507873,-17.50785" style="fill:none;fill-rule:evenodd;stroke:#ffffff;stroke-width:12.43799973;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
</g>
</svg>
-->
                </a>
                <a href="/" class="active">Portfolio</a>
                <a onclick="openContact();event.stopPropagation()" >Me contacter</a>
            </nav>

            <!--Parcours-->
            <div class="contenu-for-map" id="htmlProfil"><?php include('popup/parcours/profil.html');?></div>
            <div class="contenu-for-map" id="htmlMiw"><?php include('popup/parcours/miw.html');?></div>
            <div class="contenu-for-map" id="htmlCritt"><?php include('popup/parcours/critt.html');?></div>
            <div class="contenu-for-map" id="htmlArbre"><?php include('popup/parcours/arbre.html');?></div>

            <!--JS-->
            <div class="contenu-for-map" id="htmlGulp"><?php include('popup/js/gulp.html');?></div>
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

            <!--Partie contact-->
            <div class="myContact" id="myContact" onclick="event.stopPropagation()">
                <h3>Contact</h3>
                <form onsubmit="sendEmail(); return false;" id="formContact" class="formContact">
                    <div id="showErreur" class="showErreur">Message</div>
                    <p class="email">
                        <input required placeholder="Votre e-mail" type="email" name="email" id="email">
                    </p>
                    <p class="sujet">
                        <input required placeholder="Sujet du message" type="text" name="sujet" id="sujet">
                    </p>
                    <p class="message">
                        <textarea required name="message" placeholder="Votre message" id="message"></textarea>
                    </p>
                    <p class="envoyer">
                        <button type="submit">Envoyer <img src="img/send.svg" class="sendIcon"></button>
                    </p>
                </form>
                <div class="loadSend" id="loadSend">
                    <div class="loader" id="loader"></div><br>
                    envoi en cours ...
                </div>
            </div>
        </main>
        <script src="js/lucien.js"></script>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-91920135-1', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>
