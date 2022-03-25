let images = [
    "./images/img1.jpeg",
    "./images/3.jpg",
    "./images/img5.jpg",
    "./images/img6.jpeg",
    "./images/img7.jpg"
]

const img_slider = document.querySelectorAll('.img_slider');
const length = img_slider.length
const precedant = document.querySelector('.precedant');
const suivant = document.querySelector('.suivant');

let etape = 0;


function deleteClassActive() {
    for (let i = 0; i < length; i++) {
        img_slider[i].classList.remove('active');
        
    }
}


suivant.addEventListener('click', ()=>{
    etape++;
    if(etape>=length) {etape=0;}
    deleteClassActive()
    img_slider[etape].classList.add('active');

})

precedant.addEventListener('click', ()=>{
    etape--;
    if(etape<0) {etape=length-1;}
    deleteClassActive()
    img_slider[etape].classList.add('active');

})
//defilement automatoique des img
setInterval(function(){
    etape++;
    if(etape>=length) {etape=0;}
    deleteClassActive()
    img_slider[etape].classList.add('active');

}, 2000)