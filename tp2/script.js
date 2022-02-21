const bloc1 = document.querySelector('.bloc1')
const bloc2 = document.querySelector('.bloc2')
const btnGauche = document.querySelector('.btnGauche')
const btnDroite = document.querySelector('.btnDroite')
const bloc3 = document.querySelector('.bloc3')

let myList = ['Mon premier','Mon deuxieme','Mon trosieme','Mon quatrieme']

    for (let i = 0; i < myList.length; i++) {
        const a = document.createElement('a')
        a.setAttribute('href', '#')
        const p = document.createElement('p')
        p.innerText = myList[i];  
        a.appendChild(p);
        bloc1.appendChild(a);
    } 

const a = document.querySelectorAll('a');

for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', ()=>{
            a[i].classList.toggle('active');  //classList donne une class a un element
        });
}

const elt_blog1 = bloc1.querySelectorAll('a');
btnGauche.addEventListener('click', ()=>{
    for (let i = 0; i < elt_blog1.length; i++) {
        if (elt_blog1[i].className=='active') {
            elt_blog1[i].className='';
            bloc3.appendChild(elt_blog1[i]);
        }
        
    }
}) ;
 
btnDroite.addEventListener('click', ()=>{
const elt_blog3 = bloc3.querySelectorAll('a');
    for (let i = 0; i < elt_blog3.length; i++) {
       if(elt_blog3[i].className=='active'){
            elt_blog3[i].className='';
            bloc1.appendChild(elt_blog3[i]);
       }
    }
});

