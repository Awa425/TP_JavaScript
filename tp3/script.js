//String.fromCharCode converti une chaine de caractere  
//floor recupere la partie entiere
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

let generateFunctions = {
    lower: lowerCase,
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

btn_Gen.addEventListener('click', ()=>{
    const estlength_pass = +long_pass.value;
    const estupper = lettre_maj.checked;
    const estlower = lettre_min.checked;
    const estsymbole = car_spe.checked;
    const estnombre = nombre.checked;

    // pass.innerText = generePass(estlength_pass, estupper, estlower, estsymbole, estnombre )

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




