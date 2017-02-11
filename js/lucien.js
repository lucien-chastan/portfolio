var map;

(function(){
    var mapUrl = 'img/map.svg',
        mapBounds = [[0, 0], [80, 80]];

    //création de la carte
    map = L.map(
        'MyCarte',
        {
            center : [50.93, 22.43], 
            zoom : 4,
            zoomControl : false
        });
    
    //ajout de la tuile SVG
    L.control.zoom({position : 'bottomright'});
    L.imageOverlay(
        mapUrl, mapBounds, 
        {
            alt : 'carte interactive des compétences de Lucien Chastan',
            attribution : 'Draw by Lucien with <a href="https://inkscape.org">Inkscape</a>'
        }
    ).addTo(map);
    
    //inscrit dans le consol Log
    map.on('click', function(e) {console.log('[' + e.latlng['lat'].toFixed(2) + ', ' + e.latlng['lng'].toFixed(2) + ']');});
    
    //ajoute les markeurs sur la carte
    addMyMarker();
    
    //on déplace le nav dans la div leaflet
    var myNav = document.getElementById('myNav'),
        newNav = document.createElement('div'),
        MyCarte = document.getElementById('MyCarte'),
        mainContain = document.getElementById('mainContain');
    
    newNav.innerHTML = myNav.innerHTML;
    newNav.className = 'myNav';
    MyCarte.appendChild(newNav);
    mainContain.removeChild(myNav);
    
})();

function addMyMarker(){
    var iconSize = [30, 75],
        iconAnchor = [15, 59],
        popupAnchor = [0, -42],
        shadowUrl = 'img/ombre.svg',
        shadowSize = [16, 11],
        shadowAnchor = [8, 7];
    
    //les markeurs de point
    var mkTest = L.icon({iconUrl: 'img/marqueur-test.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGrunt = L.icon({iconUrl: 'img/grunt-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkInkscape = L.icon({iconUrl: 'img/inkscape-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkJs = L.icon({iconUrl: 'img/js-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkBootstrap = L.icon({iconUrl: 'img/bootstrap-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkBulma = L.icon({iconUrl: 'img/bulma-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkCss = L.icon({iconUrl: 'img/css-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkDrupal = L.icon({iconUrl: 'img/drupal-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkDomwork = L.icon({iconUrl: 'img/domwork-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGimp = L.icon({iconUrl: 'img/gimp-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGit = L.icon({iconUrl: 'img/git-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkHtml = L.icon({iconUrl: 'img/html-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkIziski = L.icon({iconUrl: 'img/iziski-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkLinux = L.icon({iconUrl: 'img/linux-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkLeaflet = L.icon({iconUrl: 'img/leaflet-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMaterialize = L.icon({iconUrl: 'img/materialize-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMontjoux = L.icon({iconUrl: 'img/montjoux-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMysql = L.icon({iconUrl: 'img/mysql-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkOblyk = L.icon({iconUrl: 'img/oblyk-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkPhp = L.icon({iconUrl: 'img/php-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSance = L.icon({iconUrl: 'img/sance-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSnapchat = L.icon({iconUrl: 'img/snapchat-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkVba = L.icon({iconUrl: 'img/vba-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkVbnet = L.icon({iconUrl: 'img/vbnet-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSolidworks = L.icon({iconUrl: 'img/solidworks-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkOpensource = L.icon({iconUrl: 'img/opensource-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkEscalade = L.icon({iconUrl: 'img/escalade-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkProfil = L.icon({iconUrl: 'img/profil-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkArbre = L.icon({iconUrl: 'img/arbre-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkCrittbois = L.icon({iconUrl: 'img/critt-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkChartjs = L.icon({iconUrl: 'img/chartjs-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkIut = L.icon({iconUrl: 'img/iut-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        fin;
        
    //graphisme
    popInkscape = L.marker([46.51, 42.32], {icon: mkInkscape}).bindPopup(byId('htmlInkscape').innerHTML).addTo(map);
    popGimp = L.marker([45.80, 45.88], {icon: mkGimp}).bindPopup(byId('htmlGimp').innerHTML).addTo(map);
    popSolidworks = L.marker([46.26, 44.84], {icon: mkSolidworks}).bindPopup(byId('htmlSolidworks').innerHTML).addTo(map);
    
    //JS
    popGrunt = L.marker([63.01, 59.66], {icon: mkGrunt}).bindPopup(byId('htmlGrunt').innerHTML).addTo(map);
    popJavascript = L.marker([63.52, 56.21], {icon: mkJs}).bindPopup(byId('htmlJavascript').innerHTML).addTo(map);
    popLeaflet = L.marker([63.20, 53.37], {icon: mkLeaflet}).bindPopup(byId('htmlLeaflet').innerHTML).addTo(map);
    popChartjs = L.marker([64.34, 57.40], {icon: mkChartjs}).bindPopup(byId('htmlChartjs').innerHTML).addTo(map);
    
    //CSS
    popBootStrap = L.marker([55.00, 37.53], {icon: mkBootstrap}).bindPopup(byId('htmlBootstrap').innerHTML).addTo(map);
    popBulma = L.marker([56.89, 45.66], {icon: mkBulma}).bindPopup(byId('htmlBulma').innerHTML).addTo(map);
    popCss = L.marker([59.02, 34.96], {icon: mkCss}).bindPopup(byId('htmlCss').innerHTML).addTo(map);
    popMaterialize = L.marker([58.08, 38.58], {icon: mkMaterialize}).bindPopup(byId('htmlMaterialize').innerHTML).addTo(map);
    
    //CMS
    popDrupal = L.marker([44.43, 76.38], {icon: mkDrupal}).bindPopup(byId('htmlDrupal').innerHTML).addTo(map);
    
    //HTML
    popHtml = L.marker([53.98, 43.33], {icon: mkHtml}).bindPopup(byId('htmlHtml').innerHTML).addTo(map);
    
    //Outil de travail
    popGit = L.marker([66.58, 27.07], {icon: mkGit}).bindPopup(byId('htmlGit').innerHTML).addTo(map);
    popLinux = L.marker([64.59, 31.07], {icon: mkLinux}).bindPopup(byId('htmlLinux').innerHTML).addTo(map);
    
    //Projet
    popMontjoux = L.marker([58.12, 15.73], {icon: mkMontjoux}).bindPopup(byId('htmlMontjoux').innerHTML).addTo(map);
    popSance = L.marker([59.45, 18.28], {icon: mkSance}).bindPopup(byId('htmlSance').innerHTML).addTo(map);
    popOblyk = L.marker([58.00, 19.51], {icon: mkOblyk}).bindPopup(byId('htmlOblyk').innerHTML).addTo(map);
    
    //Exerience
    popDomwork = L.marker([55.73, 20.39], {icon: mkDomwork}).bindPopup(byId('htmlDomwork').innerHTML).addTo(map);
    popIziski = L.marker([53.77, 16.52], {icon: mkIziski}).bindPopup(byId('htmlIziski').innerHTML).addTo(map);
    //popSnapchat = L.marker([55.73, 20.39], {icon: mkSnapchat}).bindPopup('<h5 class="titreInfoPoint"><img src="img/snapchat-pastille.svg" alt="logo de snapchat"> Snapchat</h5>').addTo(map);
    
    //Php et Mysql
    popPhp = L.marker([52.96, 65.39], {icon: mkPhp}).bindPopup(byId('htmlPhp').innerHTML).addTo(map);
    popMysql = L.marker([51.07, 60.29], {icon: mkMysql}).bindPopup(byId('htmlMysql').innerHTML).addTo(map);
    
    //Desktop
    popVba = L.marker([46.07, 61.59], {icon: mkVba}).bindPopup(byId('htmlVba').innerHTML).addTo(map);
    popVbnet = L.marker([45.55, 57.99], {icon: mkVbnet}).bindPopup(byId('htmlVbnet').innerHTML).addTo(map);
    
    //Passion
    popOpensource = L.marker([66.01, 9.12], {icon: mkOpensource}).bindPopup(byId('htmlOpensource').innerHTML).addTo(map);
    popEscalade = L.marker([63.71, 12.92], {icon: mkEscalade}).bindPopup(byId('htmlEscalade').innerHTML).addTo(map);
    
    //Parcours
    L.polyline(
        [[50.93, 22.43], [51.45, 27.64], [52.67, 31.25], [55.04, 30.21]], 
        {color: 'rgb(211,95,95)', weight : 2, dashArray : '5,5'}
    ).addTo(map);

    popProfil = L.marker([50.93, 22.43], {icon: mkProfil}).bindPopup(byId('htmlProfil').innerHTML).addTo(map);
    popArbre = L.marker([51.45, 27.64], {icon: mkArbre}).bindPopup(byId('htmlArbre').innerHTML).addTo(map);
    popCritt = L.marker([52.67, 31.25], {icon: mkCrittbois}).bindPopup(byId('htmlCritt').innerHTML).addTo(map);
    popMiw = L.marker([55.04, 30.21], {icon: mkIut}).bindPopup(byId('htmlMiw').innerHTML).addTo(map);
    
    popProfil.openPopup();
    
}