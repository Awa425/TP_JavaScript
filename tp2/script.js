//Declaration
const bloc1 = document.querySelector('.bloc1')
const btnGauche = document.querySelector('.btnGauche')
const bloc3 = document.querySelector('.bloc3')


let myList = [
    {name: 'Mon premier', activated: 0},
    {name: 'Mon deuxieme', activated: 0},
    {name: 'Mon trosieme', activated: 0},
    {name: 'Mon quatrieme', activated: 0}
]
console.log(myList)








//Fonction
function creerTable() {
   bloc1.innerHTML =''; 
    const table = document.createElement('table')
    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr')
        const p = document.createElement('p')
        p.innerText = myList[i].name

        //events TR 
        tr.addEventListener('click', function () {
            myList[i].activated=!myList[i].activated
            // if (myList[i].activated) {
                
            // }
            creerTable()

        });
        tr.style.backgroundColor= myList[i].activated ? "blue" : "rgb(211, 207, 207)";

        //events btn
        btnGauche.addEventListener('click', function (params) {
            
        })

        // bloc1.addEventListener('hover', function () {
        //     btnGauche.toggleAttribute('desabled')

        // })


        //ajout dans les parent
        tr.appendChild(p)
        table.appendChild(tr)
        bloc1.appendChild(table)
      
    }
}
window.onload = creerTable;





//Events