// variabelen voor de taart images
var toppingImg = document.querySelector("#topping");
var kaarsjesKleurImg = document.querySelector("#kaarsjesKleur");
var taart = document.querySelector("#taartSmaak");

// variabelen voor verstuurknop confetti
var buttonConfetti = document.querySelector("formVerstuurKnop");
var bodyEl = document.querySelector("body");
var h1Element = document.querySelector("h1")

// variabelen muziek knop
var audioButton = document.querySelector("#geluidButton");
var audioStatus = false;
var audio = new Audio("audio/happy-birthday-stevie-wonder.mp3");

// variabelen voor lichtjes
var lichtjes = ["deeppink", "blueViolet", "mistyrose", "azur", "palegreen", "cadetBlue", "skyblue", "yellow", "blue", "green", "red", "purple"];
var buttonLichtjes = document.querySelector("#achtergrondDisco");

// Bron: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
var searchParams = new URLSearchParams(window.location.search);

// variabelen smaak, topping en kaarsjes
var smaak = searchParams.get('smaak');
var topping = searchParams.get('topping');
var kaarsjes = searchParams.get('kaarsjes');

console.log(smaak);
console.log(topping);
console.log(kaarsjes);

// voor smaak
if(smaak == "aardbei"){
    soortTaartAardbei();
 } else if(smaak == "chocola"){
    soortTaartChocola();
 } else if(smaak == "citroen"){
    soortTaartCitroen();
 } else if(smaak == "vanille"){
    soortTaartVanille();                
 }; 
 
 // voor topping
 if(topping == "aardbeien"){
    toppingTaartAardbei();
 } else if(topping == "frambozen"){
    toppingTaartFrambozen();
 } else if(topping == "kersen"){
    toppingTaartKersen();
 } else if(topping == "creme"){
    toppingTaartCreme();               
 } else if(topping == "hazelnoten"){
    toppingTaartHazelnoten();               
 } else if(topping == "sprinkels"){
    toppingTaartSprinkels();               
 };

 // voor kaarsjes
 if(kaarsjes == "roze"){
    kaarsjesTaartRoze();
 } else if(kaarsjes == "rood"){
    kaarsjesTaartRood();
 } else if(kaarsjes == "oranje"){
    kaarsjesTaartOranje();
 } else if(kaarsjes == "blauw"){
    kaarsjesTaartBlauw();
 } else if(kaarsjes == "mix"){
    kaarsjesTaartMix();
 }; 

// voor smaak image
function soortTaartAardbei(){
    taart.src = "images/soortAardbei.png"
};

function soortTaartChocola(){
    taart.src = "images/soortChocola.png"
};

function soortTaartCitroen(){
    taart.src = "images/soortCitroen.png"
};

function soortTaartVanille(){
    taart.src = "images/soortVanille.png"
};

// voor toppings image
function toppingTaartAardbei(){
    toppingImg.src = "images/toppingAardbei.png"
};

function toppingTaartFrambozen(){
    toppingImg.src = "images/toppingFramboos.png"
};

function toppingTaartKersen(){
    toppingImg.src = "images/toppingKers.png"
};

function toppingTaartCreme(){
    toppingImg.src = "images/toppingCreme.png"
};

function toppingTaartHazelnoten(){
    toppingImg.src = "images/toppingHazelnoten.png"
};

function toppingTaartSprinkels(){
    toppingImg.src = "images/toppingSprinkels.png"
};

// voor kaarsjes image
function kaarsjesTaartRoze(){
    kaarsjesKleurImg.src = "images/kaarsjesRoze.png"
};

function kaarsjesTaartRood(){
    kaarsjesKleurImg.src = "images/kaarsjesRood.png"
};

function kaarsjesTaartOranje(){
    kaarsjesKleurImg.src = "images/kaarsjesOranje.png"
};

function kaarsjesTaartBlauw(){
    kaarsjesKleurImg.src = "images/kaarsjesBlauw.png"
};

function kaarsjesTaartMix(){
    kaarsjesKleurImg.src = "images/kaarsjesMix.png"
};

// functie voor confetti achtergrond en muziek 
function confettiAchtergrond(){
    bodyEl.classList.add("confetti")
    audio.play();
    h1Element.textContent = "De taart is verstuurt!"; 
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

// voor confetti achtergrond en muziek
formVerstuurKnop.addEventListener("click", confettiAchtergrond);

// Voor muziek knop
audioButton.addEventListener("click", speelAudio);

// voor disco achtergrond
buttonLichtjes.addEventListener("click", function(){
    setInterval(veranderAchtergrond, 400)
});
