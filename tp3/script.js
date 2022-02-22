//String.fromCharCode converti une chaine de caractere  
//floor recupere la partie entiere
//Fonction anonyme ne peut s'execute qu'une seule fois
let myList = [

    { 
      long_pass: 'Longueur du Password',
      lettre_maj: 'Contient des lettres Majuscules',
      lettre_min: 'Contient des lettre Minuscules',
      nombre: 'Contient des nombres',
      car_spe: 'Contient des caracteres Speciaux'
      }
  ] 
const pass = document.getElementById('pass');
const btn_copy = document.getElementById('btn_copy');
const centre = document.querySelector('.center');
const check = document.querySelectorAll('.check');
const long_pass = document.getElementById('long_pass'); 
const lettre_maj = document.getElementById('lettre_maj');
const lettre_min = document.getElementById('lettre_min');
const nombre = document.getElementById('nombre');
const car_spe = document.getElementById('car_spe');
const btn_Gen = document.getElementById('btn_Gen');

//TABLEAU OBJET
let generateFunctions = {
    lower: lowerCase,     //chac fonct genere une seule caractere
    upper: upperCase,
    symbole: symbole,
    number: number
}

for (let i = 0; i < myList.length; i++) {
    const li = document.createElement('li')
    const ul = document.createElement('ul')
    li.innerText = myList[i];  
    ul.appendChild(li);
    centre.appendChild(ul);
} 

function generate_Pass(estlength_pass,upper,lower,symbole,number) {
   let generate_Pass='';
    const count_elt = upper+lower+symbole+number;   //somme des fonction qui genere chacun un element
    console.log(count_elt);
    const count_elt_array = [{upper},{lower},{symbole},{number}].filter(type=>Object.values(type)[0]);  //tableau simple qui represente la valeur de chaque
    if (count_elt == 0) {
        alert('Veuillez cocher au moins une case')
    }

    for (let i = 0; i < estlength_pass; i+=count_elt) {
        count_elt_array.forEach(element => {
        const get_elt = Object.keys(element)[0];   
        generate_Pass+=generateFunctions[get_elt](); 
        });   
    }
    const a=generate_Pass.slice(0,estlength_pass);
    return a;
}

btn_Gen.addEventListener('click', ()=>{
    const estlength_pass = +long_pass.value;
    const estupper = lettre_maj.checked;
    const estlower = lettre_min.checked;
    const estsymbole = car_spe.checked;
    const estnombre = nombre.checked;
    
    pass.value = generate_Pass(estlength_pass, estupper, estlower, estsymbole, estnombre );
    pass.shuffle()
    console.log(pass)
})

function lowerCase() {
    let a = String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
    return a;
}

function upperCase() {
    let a = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    return a;
}
function symbole() {
    let a = String.fromCharCode(Math.floor(Math.random() * 13) + 33)
    return a;
}
function number() {
    let a = +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    return a;
}




