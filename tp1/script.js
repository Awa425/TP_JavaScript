//DOM
const btnAdd = document.getElementById('btnAdd')
const container = document.getElementById('container')

// const text = document.getElementById('icon') 




//FONCTIONS 
let i=0
function createCard() {
    const card = document.createElement('div');
    card.setAttribute('class', 'card')
    card.setAttribute('id', 'id_'+i)

    card.innerHTML = `  <div class="header">
                            <button class="icon iconDelete" onclick='Delete(${i})'><i class="fa fa-trash" style='font-size:24px'></i></button>
                            <button class="icon iconAdd"><i class='fas fa-edit' style='font-size:24px'></i></button>
                        </div>
                        <div class="center">
                             <textarea name="" class="" cols="auto"  ></textarea>    
                        </div>`
    container.appendChild(card) 
    const iconDelete = document.querySelector('.iconDelete')
    i++
}   
function Delete(i) {
    let Delete = document.getElementById('id_'+i)
    Delete.remove()
    // console.log(Delete)
}



//EVENTS
btnAdd.addEventListener('click', function(){
    createCard()
})

