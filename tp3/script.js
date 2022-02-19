let myList = [
   {text: 'Longueur du Password', activated: 0},
   {text: 'Contient des lettres Majuscules', activated: 0},
   {text: 'Contient des lettre Minuscules', activated: 0},
   {text: 'Contient des nombres', activated: 0},
   {text: 'Contient des caracteres Speciaux', activated: 0}
]  


//declaration
const center = document.querySelector('.center')
let tab = creatTable()
// console.log(tab)
//fonction
function creatTable() {
    center.innerHTML='';
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const cell1 = document.createElement('td')
    const radio = document.createElement('INPUT')
    radio.setAttribute('type', 'radio')

    for (let i = 0; i < myList.length; i++) {
        cell1.innerHTML=(myList[i].text)
        console.log(myList[i].text)
    }
    // creatTable()
    tr.appendChild(cell1)
    tr.appendChild(radio)
    table.appendChild(tr)
    center.appendChild(table)
    
}

//events