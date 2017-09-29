var map,
    statusOpenSideBar = false;

//branchement des écouteurs
window.addEventListener('click', function(){if(statusOpenSideBar) openSideBar();});
window.onload = function(){leverDeVoile();};

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
        
})();

//anime les titres à l'ouverture du portfolio
function titleAnimation(){
    var title1 = document.getElementById('title-lucien-chastan'),
        title2 = document.getElementById('title-web-full-stack');
    
    setTimeout(function(){
        title1.style.transform = 'translateY(0px)';
        title1.style.opacity = '1';
        setTimeout(function(){
            title2.style.opacity = '1';
            title2.style.transform = 'translateY(0px)';
        },150);
    },500);
}

function leverDeVoile(){
    var fond = document.getElementById('fond-de-chargement');
    
    setTimeout(function(){
        fond.style.opacity = 0;
        setTimeout(function(){
            fond.style.display = 'none';
        },550);
    },2500);
}

function addMyMarker(){
    var iconSize = [30, 75],
        iconAnchor = [15, 59],
        popupAnchor = [0, -42],
        shadowUrl = 'img/ombre.svg',
        shadowSize = [16, 11],
        shadowAnchor = [8, 7];
    
    //les markeurs de point
    var mkTest = L.icon({iconUrl: 'img/marqueur-test.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGulp = L.icon({iconUrl: 'point/gulp-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkInkscape = L.icon({iconUrl: 'point/inkscape-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkJs = L.icon({iconUrl: 'point/js-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkBootstrap = L.icon({iconUrl: 'point/bootstrap-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkBulma = L.icon({iconUrl: 'point/bulma-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkCss = L.icon({iconUrl: 'point/css-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkDrupal = L.icon({iconUrl: 'point/drupal-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkDomwork = L.icon({iconUrl: 'point/domwork-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGimp = L.icon({iconUrl: 'point/gimp-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkGit = L.icon({iconUrl: 'point/git-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkHtml = L.icon({iconUrl: 'point/html-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkIziski = L.icon({iconUrl: 'point/iziski-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkLinux = L.icon({iconUrl: 'point/linux-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkLeaflet = L.icon({iconUrl: 'point/leaflet-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMaterialize = L.icon({iconUrl: 'point/materialize-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMontjoux = L.icon({iconUrl: 'point/montjoux-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkMysql = L.icon({iconUrl: 'point/mysql-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkOblyk = L.icon({iconUrl: 'point/oblyk-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkPhp = L.icon({iconUrl: 'point/php-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSance = L.icon({iconUrl: 'point/sance-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSnapchat = L.icon({iconUrl: 'point/snapchat-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkVba = L.icon({iconUrl: 'point/vba-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkVbnet = L.icon({iconUrl: 'point/vbnet-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSolidworks = L.icon({iconUrl: 'point/solidworks-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkOpensource = L.icon({iconUrl: 'point/opensource-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkEscalade = L.icon({iconUrl: 'point/escalade-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkProfil = L.icon({iconUrl: 'point/profil-point-n.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkArbre = L.icon({iconUrl: 'point/arbre-point-n.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkSearch = L.icon({iconUrl: 'point/search-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkCrittbois = L.icon({iconUrl: 'point/critt-point-n.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkChartjs = L.icon({iconUrl: 'point/chartjs-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkIut = L.icon({iconUrl: 'point/iut-point-n.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkLaravel = L.icon({iconUrl: 'point/laravel-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        mkCrittherm = L.icon({iconUrl: 'point/crittherm-point.svg',iconSize: iconSize, iconAnchor: iconAnchor, popupAnchor: popupAnchor, shadowUrl: shadowUrl, shadowSize: shadowSize, shadowAnchor: shadowAnchor}),
        fin;
        
    //graphisme
    popInkscape = L.marker([46.22, 41.70], {icon: mkInkscape}).bindPopup(byId('htmlInkscape').innerHTML).addTo(map);
    popGimp = L.marker([47.19, 43.66], {icon: mkGimp}).bindPopup(byId('htmlGimp').innerHTML).addTo(map);
    popSolidworks = L.marker([45.21, 45.43], {icon: mkSolidworks}).bindPopup(byId('htmlSolidworks').innerHTML).addTo(map);
    
    //JS
    popGulp = L.marker([63.01, 59.66], {icon: mkGulp}).bindPopup(byId('htmlGulp').innerHTML).addTo(map);
    popJavascript = L.marker([63.13, 48.78], {icon: mkJs}).bindPopup(byId('htmlJavascript').innerHTML).addTo(map);
    popLeaflet = L.marker([63.20, 53.37], {icon: mkLeaflet}).bindPopup(byId('htmlLeaflet').innerHTML).addTo(map);
    //popChartjs = L.marker([63.90, 56.82], {icon: mkChartjs}).bindPopup(byId('htmlChartjs').innerHTML).addTo(map);
    
    //CSS
    //popBootStrap = L.marker([55.00, 37.53], {icon: mkBootstrap}).bindPopup(byId('htmlBootstrap').innerHTML).addTo(map);
    //popBulma = L.marker([56.63, 45.55], {icon: mkBulma}).bindPopup(byId('htmlBulma').innerHTML).addTo(map);
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
    popMontjoux = L.marker([57.27, 16.80], {icon: mkMontjoux}).bindPopup(byId('htmlMontjoux').innerHTML).addTo(map);
    popSance = L.marker([59.48, 17.62], {icon: mkSance}).bindPopup(byId('htmlSance').innerHTML).addTo(map);
    popOblyk = L.marker([57.84, 19.40], {icon: mkOblyk}).bindPopup(byId('htmlOblyk').innerHTML).addTo(map);
    popCrittherm = L.marker([58.63, 15.03], {icon: mkCrittherm}).bindPopup(byId('htmlCrittherm').innerHTML).addTo(map);

    //Exerience
    popDomwork = L.marker([55.58, 21.62], {icon: mkDomwork}).bindPopup(byId('htmlDomwork').innerHTML).addTo(map);
    popIziski = L.marker([53.77, 16.52], {icon: mkIziski}).bindPopup(byId('htmlIziski').innerHTML).addTo(map);
    //popSnapchat = L.marker([55.73, 20.39], {icon: mkSnapchat}).bindPopup('<h5 class="titreInfoPoint"><img src="img/snapchat-pastille.svg" alt="logo de snapchat"> Snapchat</h5>').addTo(map);
    
    //Php et Mysql
    popPhp = L.marker([52.96, 65.39], {icon: mkPhp}).bindPopup(byId('htmlPhp').innerHTML).addTo(map);
    popLaravel = L.marker([51.69, 63.08], {icon: mkLaravel}).bindPopup(byId('htmlLaravel').innerHTML).addTo(map);
    popMysql = L.marker([51.18, 60.03], {icon: mkMysql}).bindPopup(byId('htmlMysql').innerHTML).addTo(map);
    
    //Desktop
    popVba = L.marker([46.07, 61.59], {icon: mkVba}).bindPopup(byId('htmlVba').innerHTML).addTo(map);
    popVbnet = L.marker([45.55, 57.99], {icon: mkVbnet}).bindPopup(byId('htmlVbnet').innerHTML).addTo(map);
    
    //Passion
    popOpensource = L.marker([66.01, 9.12], {icon: mkOpensource}).bindPopup(byId('htmlOpensource').innerHTML).addTo(map);
    popEscalade = L.marker([63.71, 12.92], {icon: mkEscalade}).bindPopup(byId('htmlEscalade').innerHTML).addTo(map);
    
    //Parcours
    L.polyline(
        [[50.93, 22.43], [51.45, 27.64], [52.67, 31.25], [55.04, 30.21], [55.80, 27.88]],
        {color: 'rgb(240,81,52)', weight : 2, dashArray : '5,5'}
    ).addTo(map);

    popProfil = L.marker([50.93, 22.43], {icon: mkProfil}).bindPopup(byId('htmlProfil').innerHTML).addTo(map);
    popArbre = L.marker([51.45, 27.64], {icon: mkArbre}).bindPopup(byId('htmlArbre').innerHTML).addTo(map);
    popCritt = L.marker([52.67, 31.25], {icon: mkCrittbois}).bindPopup(byId('htmlCritt').innerHTML).addTo(map);
    popMiw = L.marker([55.04, 30.21], {icon: mkIut}).bindPopup(byId('htmlMiw').innerHTML).addTo(map);
    popSearch = L.marker([55.80, 27.88], {icon: mkSearch}).bindPopup(byId('htmlSearch').innerHTML).addTo(map);

    popProfil.openPopup();
    
}


function openSideBar(openId){
    var myContact = document.getElementById('myContact');
        
    if(statusOpenSideBar == false){
        var openZone = document.getElementById(openId),
            zoneSideBar = document.getElementsByClassName('zone-side-bar');
        
        for(var i = 0 ; i < zoneSideBar.length ; i++){zoneSideBar[i].style.display = 'none';}
        openZone.style.display = 'block';
        
        myContact.style.transform = 'translateX(0px)';
        statusOpenSideBar = true;
    }else{
        myContact.style.transform = 'translateX(460px)';
        statusOpenSideBar = false;
    }
}

function sendEmail(){    
    var formContact = document.getElementById('formContact'),
        loadSend = document.getElementById('loadSend'),
        loader = document.getElementById('loader'),
        showErreur = document.getElementById('showErreur'),
        email = document.getElementById('email'),
        sujet = document.getElementById('sujet'),
        message = document.getElementById('message'),
        xhr = new XMLHttpRequest(),
        data = 'email=' + email.value + '&sujet=' + sujet.value + '&message=' + message.value;
        
    //affichage du loader
    loadSend.style.height = formContact.offsetHeight + 'px';
    loadSend.style.paddingTop = (formContact.offsetHeight / 2 - 50) + 'px';
    formContact.style.display = 'none';
    loadSend.style.display = 'block';
    
    xhr.open('POST','php/sendEmail.php');
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if(xhr.responseText == 'ok'){
                loadSend.innerHTML = 'Votre message a bien été envoyé,<br>Je vous réponds le plus rapidement possible.<p>Bonne journée !</p>';
            }else{
                loadSend.style.display = 'none';
                formContact.style.display = 'block';
                showErreur.style.display = 'block';
                showErreur.innerHTML = xhr.responseText;
            }
        }
    }
}

function openLoadPage(){
    var fond = document.getElementById('fond-de-chargement'),
        load = document.getElementById('zone-load-page');
    
    fond.style.display = 'block';
    fond.style.opacity = '1';
    
    load.style.marginTop = 'calc(100vh /2 - 179px / 2)';
    
}