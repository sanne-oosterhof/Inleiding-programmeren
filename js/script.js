// variabelen voor de taart images
var taart = document.querySelector("#taartSmaak");
var topping = document.querySelector("#topping");
var kaarsjesKleurImg = document.querySelector("#kaarsjesKleur");

// variabelen voor smaak
var smaakAardbei = document.querySelector("#smaakAardbei");
var smaakChocola = document.querySelector("#smaakChocola");
var smaakCitroen = document.querySelector("#smaakCitroen");
var smaakVanille = document.querySelector("#smaakVanille");

// variabelen voor toppings
var toppingAardbeien = document.querySelector("#toppingAardbeien");
var toppingFrambozen = document.querySelector("#toppingFrambozen");
var toppingKersen = document.querySelector("#toppingKersen");
var toppingCreme = document.querySelector("#toppingCreme");
var toppingHazelnoten = document.querySelector("#toppingHazelnoten");
var toppingSprinkels = document.querySelector("#toppingSprinkels");

// variabelen voor kaarsjes
var kaarsjesRoze = document.querySelector("#kaarsjesRoze");
var kaarsjesRood = document.querySelector("#kaarsjesRood");
var kaarsjesOranje = document.querySelector("#kaarsjesOranje");
var kaarsjesBlauw = document.querySelector("#kaarsjesBlauw");
var kaarsjesMix = document.querySelector("#kaarsjesMix");

// variabelen voor muziek knop
var audioButton = document.querySelector("#geluidButton");
var audioStatus = false;
var audio = new Audio("audio/happy-birthday-stevie-wonder.mp3");

// variabelen voor lichtjes
var lichtjes = ["deeppink", "blueViolet", "mistyrose", "azur", "palegreen", "cadetBlue", "skyblue", "yellow", "blue", "green", "red", "purple"];
var buttonLichtjes = document.querySelector("#achtergrondDisco");

// variabelen voor volgende pagina
var verstuurButton = document.querySelector("#verstuurButton");
var url = new URL(window.location.href);
var smaakWaarde = null;
var toppingWaarde = null;
var kaarsjesWaarde = null;

// functies voor smaak
function soortTaartAardbei(){
    taart.src = "images/soortAardbei.png"
    smaakWaarde = "aardbei"
};

function soortTaartChocola(){
    taart.src = "images/soortChocola.png"
    smaakWaarde = "chocola"
};

function soortTaartCitroen(){
    taart.src = "images/soortCitroen.png"
    smaakWaarde = "citroen"
};

function soortTaartVanille(){
    taart.src = "images/soortVanille.png"
    smaakWaarde = "vanille"
};

// functies voor toppings
function taartMetAardbeien(){
    topping.src = "images/toppingAardbei.png"
    toppingWaarde = "aardbeien"
};

function taartMetFrambozen(){
    topping.src = "images/toppingFramboos.png"
    toppingWaarde = "frambozen"
};

function taartMetKersen(){
    topping.src = "images/toppingKers.png"
    toppingWaarde = "kersen"
};

function taartMetCreme(){
    topping.src = "images/toppingCreme.png"
    toppingWaarde = "creme"
};

function taartMetHazelnoten(){
    topping.src = "images/toppingHazelnoten.png"
    toppingWaarde = "hazelnoten"
};

function taartMetSprinkels(){
    topping.src = "images/toppingSprinkels.png"
    toppingWaarde = "sprinkels"
};

// functies voor kaarsjes 
function taartRozeKaarsjes(){
    kaarsjesKleur.src = "images/kaarsjesRoze.png"
    kaarsjesWaarde = "roze"
};

function taartRodeKaarsjes(){
    kaarsjesKleur.src = "images/kaarsjesRood.png"
    kaarsjesWaarde = "rood"
};

function taartOranjeKaarsjes(){
    kaarsjesKleur.src = "images/kaarsjesOranje.png"
    kaarsjesWaarde = "oranje"
};

function taartBlauweKaarsjes(){
    kaarsjesKleur.src = "images/kaarsjesBlauw.png"
    kaarsjesWaarde = "blauw"
};

function taartMixKaarsjes(){
    kaarsjesKleur.src = "images/kaarsjesMix.png"
    kaarsjesWaarde = "mix"
};

// functie voor audio
function speelAudio(){
    if(audio.paused == true){
        audio.play();
    } else if(audio.paused == false){
        audio.pause();
    }
};

// functie voor disco achtergrond
function veranderAchtergrond(){
    var willekeurigGetal = Math.floor(Math.random() * lichtjes.length);
    document.body.style.backgroundColor = lichtjes[willekeurigGetal]
};

// functie naar volgende pagina
function gaNaarVolgendePagina(){
    window.location.href = 
    "versturen.html" + "?smaak=" + smaakWaarde + '&topping=' + toppingWaarde + "&kaarsjes=" + kaarsjesWaarde 
};

// voor smaak
smaakAardbei.addEventListener("click", soortTaartAardbei);
smaakChocola.addEventListener("click", soortTaartChocola);
smaakCitroen.addEventListener("click", soortTaartCitroen);
smaakVanille.addEventListener("click", soortTaartVanille);

// voor toppings
toppingAardbeien.addEventListener("click", taartMetAardbeien);
toppingFrambozen.addEventListener("click", taartMetFrambozen);
toppingKersen.addEventListener("click", taartMetKersen);
toppingCreme.addEventListener("click", taartMetCreme);
toppingHazelnoten.addEventListener("click", taartMetHazelnoten);
toppingSprinkels.addEventListener("click", taartMetSprinkels);

// voor kaarsjes
kaarsjesRoze.addEventListener("click", taartRozeKaarsjes);
kaarsjesRood.addEventListener("click", taartRodeKaarsjes);
kaarsjesOranje.addEventListener("click", taartOranjeKaarsjes);
kaarsjesBlauw.addEventListener("click", taartBlauweKaarsjes);
kaarsjesMix.addEventListener("click", taartMixKaarsjes);

// Voor audio knop
audioButton.addEventListener("click", speelAudio);

// voor disco achtergrond
buttonLichtjes.addEventListener("click", function lichtjesInterval(){
    setInterval(veranderAchtergrond, 400)
});

// voor knop naar volgende pagina
verstuurButton.addEventListener('click', gaNaarVolgendePagina);

