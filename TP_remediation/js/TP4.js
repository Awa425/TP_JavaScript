 const title = document.getElementById('title')
 const minuteur = document.getElementById('minuteur')
 const jour = document.getElementById('j')
 const heure = document.getElementById('h')
 const minute = document.getElementById('m')
 const seconde = document.getElementById('s')

//creer un constante contenant le decalage de la zone utc et ou nous somme
let now = new Date();
const dateOffsetMinute = now.getTimezoneOffset();//renvoie le decallage de temps

 //creer des constante en seconde
 const jourEnMilliseconde = 1000*60*60*24;
 const heureEnMilliseconde = 1000*60*60;
 const minuteEnMilliseconde = 1000*60 ;

 //on creer la date a la quelle le decompte se termine
 const newYear = new Date('2023');

 const getCountdown = ()=>{
     //Recupere le temps pile ou se code est execute 
    let nowDate =  Date.now();
     
    //recupere le nombre de miliseconde qui reste jusqu'a nouvel an
    let tempsRestant = newYear - nowDate + dateOffsetMinute*minuteEnMilliseconde;

    //Jour
    let nbreJour = Math.floor(tempsRestant/jourEnMilliseconde);

    //on sort le reste puis calculer l'heure
    let restNbreJour = tempsRestant - nbreJour*jourEnMilliseconde;
    let nbreHeur = Math.floor(restNbreJour / heureEnMilliseconde);

    //on sort le reste puis calculer les minutes
    let restNbreHeure = restNbreJour - nbreHeur*heureEnMilliseconde;
    let nbreMinute = Math.floor(restNbreHeure / minuteEnMilliseconde)

    //on sort le reste puis calculer les secondes
    let restNbreSeconde = restNbreHeure - nbreMinute*minuteEnMilliseconde;
    let nbreSeconde = Math.floor(restNbreSeconde / 1000)

    jour.textContent = nbreJour;
    heure.textContent = nbreHeur;
    minute.textContent = nbreMinute;
    seconde.textContent = nbreSeconde;

    if (tempsRestant<= 0) {
    clearInterval(countInterval); //pour arreter l'execution
        jour.textContent = 0;
        heure.textContent = 0;
        minute.textContent = 0;
        seconde.textContent = 0;
        title.innerHTML = "On est en 2023!!!!!";
    }
    // let countInterval = setInterval(getCountdown, 1000);
 }


 //On s'execute pour la 1ere fois la fonction 
//  getCountdown();
