let myList = [

  { 
    long_pass: 'Longueur du Password',
    lettre_maj: 'Contient des lettres Majuscules',
    lettre_min: 'Contient des lettre Minuscules',
    nombre: 'Contient des nombres',
    car_spe: 'Contient des caracteres Speciaux'
    }
] 
//Declaration des variable du DOM
const pass = document.getElementById('pass')
const btn_copy = document.getElementById('btn_copy')
const centre = document.querySelector('.center')
const check = document.querySelectorAll('.check')
const long_pass = document.getElementById('long_pass')
const lettre_maj = document.getElementById('lettre_maj')
const lettre_min = document.getElementById('lettre_min')
const nombre = document.getElementById('nombre')
const car_spe = document.getElementById('car_spe')
const btn_Gen = document.getElementById('btn_Gen')


//Definition des caracteres du mot de pass
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789";
const symbols = "!@#$%^&*_-+=";

const generatePass = (long_pass, caracteres)=>{
    let password = "";
    for (let i = 0; i < long_pass; i++) {
        password += caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        )   
    }
    return password
};
build()
function build() {

    check.checked=!check.checked

    long_pass.innerText = myList[0].long_pass
    lettre_maj.innerText = myList[0].lettre_maj
    lettre_min.innerText = myList[0].lettre_min
    nombre.innerText = myList[0].nombre
    car_spe.innerText = myList[0].car_spe
    
}

function getSelect() {
    let eltSelect
    check.forEach(check=>{
        if (check.checked) {
            check = check.id
            console.log(check)
            // console.log(myList.reponse)

        }
    })
    return reponse
}
console.log(getSelect())
btn_Gen.addEventListener('click', ()=>{
    let car_maj = maj;
    let car_min = minus;

    lettre_maj.checked ? (caracteres += maj) : "";
    lettre_min.checked ? (caracteres += minus) : "";
    nombre.checked ? (caracteres += numeric) : "";
    car_spe.checked ? (caracteres += symbols) : "";
    pass.innerText = generatePass(length.value, caracteres);
    // build()
    // console.log(pass.value)
}); 


btn_copy.addEventListener("click", () => {
    pass.select();
    document.execCommand("copy");
    alert("Mot de pass copier");
  });

window.onload = build;

