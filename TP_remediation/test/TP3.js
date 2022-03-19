let arrayImg = [
    "../images/1.jpg",
    "../images/2.jpeg",
    "../images/3.jpg",
    "../images/4.webp",
    "../images/5.webp",
]


const carousel = document.querySelector('.carousel');
const lengthArray =  arrayImg.length
const item = document.querySelectorAll('.item')
const btns = document.querySelector('.btns');
const btnNext = document.getElementById('next')
const btnPrev = document.getElementById('prev')
console.log(item)




let i =0;
function creteItems(image) {
    // const item = document.createElement('div');
    const img = document.createElement('img');
    // const btns = document.createElement('div')
    // const btnPrev = document.createElement('input');
    // const btnNext = document.createElement('input');


    // item.setAttribute('class', "item");
    // item.setAttribute('class', "visible");
    // item.setAttribute('class', "hidden");
    // item.setAttribute('id', 'item')
    img.setAttribute("src", image);
    // btns.setAttribute('class', 'btns');
    // btnPrev.setAttribute('id', 'prev')
    // btnPrev.setAttribute('type', 'button')
    // btnPrev.setAttribute('value', '<<')
    // btnNext.setAttribute('id', 'next')
    // btnNext.setAttribute('value', '>>');
    // btnNext.setAttribute('type', 'button');


    item.appendChild(img);
    // btns.appendChild(btnPrev);
    // btns.appendChild(btnNext);
    // carousel.appendChild(item);
    // carousel.appendChild(btns);

}

function updatePosition() {
    item.forEach(elt => {
        elt.classList.remove('visible')
        elt.classList.add('hidden')
    });
}

function next() {
    updatePosition();
    if(currentPosition === lengthArray){
        currentPosition = 0;
      }
      else{
        currentPosition++;
      }
}

btnNext.addEventListener('click', ()=>{
    next() 
})

btnPrev.addEventListener('click', ()=>{
  
})


