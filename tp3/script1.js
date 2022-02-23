 
//Declaration des variable du DOM
const input = document.querySelectorAll('.input');
const pass = document.getElementById('pass');
const btn_copy = document.getElementById('btn_copy')
const long_pass = document.getElementById('long_pass')
const lettre_maj = document.getElementById('lettre_maj')
const lettre_min = document.getElementById('lettre_min');
const nombre = document.getElementById('nombre');
const car_spe = document.getElementById('car_spe');
const btn_Gen = document.getElementById('btn_Gen');

//Definition des caracteres du mot de pass
const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789";
const symbols = "!@#$%^&*_-+=";

const generatePass = (long_pass,char, caracteres)=>{
    let password = "";
    for (let i = 0; i < long_pass-char.length; i++) {
        password += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        )   
    }
    return char += password;
};

btn_Gen.addEventListener('click', ()=>{
    let cpt=0;
    for (let i = 1; i < input.length; i++) {
        if(input[i].checked)
            cpt++;    
    }
    let char = "";
    let caracteres = ""
    
    lettre_maj.checked ? (char += upperCase(), caracteres += maj) : "";
    lettre_min.checked ? (char += lowerCase(), caracteres += minus) : "";
    nombre.checked ? (char += number(), caracteres += numeric) : "";
    car_spe.checked ? (char += symbole(), caracteres += symbols) : ""; 
    pass.value = generatePass(long_pass.value, char, caracteres);
}); 

btn_copy.addEventListener("click", () => {
    pass.select();
    document.execCommand("copy");
    alert("Mot de pass copier");
  });  

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