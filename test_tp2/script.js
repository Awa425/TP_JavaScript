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
let myList3 = [
    
]
//Fonction
function creerTable() {
   bloc1.innerHTML =''; 
    const table = document.createElement('table')
    var tab3 = document.createElement('table')

    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr')
        const p = document.createElement('p')
        p.innerText = myList[i].name
            tr.addEventListener('click', function () {
                myList[i].activated=!myList[i].activated                
                    btnGauche.addEventListener('click', ()=>{
                        for(let x = 0; x<myList.length; x++){
                        if (myList[x].activated) {
                            tab3.appendChild(tr)
                            // var corbeil= myList.splice(x,1);
                            creerTable()
                        } 
                    }
                });    
                creerTable()
            });
          
        tr.style.backgroundColor= myList[i].activated ? "blue" : "rgb(211, 207, 207)";

        //events btn
        btnGauche.addEventListener('click', function (params) {
            
        })

        //ajout dans les parent
        tr.appendChild(p)
        table.appendChild(tr)
        bloc1.appendChild(table)
        bloc3.appendChild(tab3)

      
    }
}
window.onload = creerTable;
