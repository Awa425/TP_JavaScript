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

// console.log(myList)

//Fonction
function creerTable() {
   bloc1.innerHTML =''; 
    const table = document.createElement('table')
    var tab3 = document.createElement('table')


    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr')
        const p = document.createElement('p')
        p.innerText = myList[i].name
        // console.log(p)

        //events TR 
            tr.addEventListener('click', function () {
                myList[i].activated=!myList[i].activated
                // let x=0
                
                    btnGauche.addEventListener('click', ()=>{
                        for(let x = 0; x<myList.length; x++){
                        if (myList[x].activated) {
                            myList3.push(myList[x].name )
                            // myList3=myList[x].name 
                            tab3.innerText = myList3

                            // tab3.appendChild(p)
                        var corbeil= myList.splice(x,1);
                        console.log(myList) 
                        console.log(myList3)

                        creerTable()
                        } 
                        // tab3.splice(i,0)
                        // x++
                        //  creerTable()
                        // console.log(myList)
                        //  creerTable()
                        }
                    });    
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

        //ajout dans les parent bloc3
        bloc3.appendChild(tab3)

      
    }
}
window.onload = creerTable;





//Events