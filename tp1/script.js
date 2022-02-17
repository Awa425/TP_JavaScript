//DOM
const btnAdd = document.getElementById('btnAdd')
const container = document.getElementById('container')




//FONCTIONS 
let i=0
function createCard() {
    const card = document.createElement('div');
    card.setAttribute('class', 'card')
    card.setAttribute('id', 'id_'+i)
    console.log(card)
    card.innerHTML = `  <div class="header">
                            <button class="icon iconDelete" onclick='Delete(${i})'><i class="fa fa-trash" style='font-size:24px'></i></button>
                            <button class="icon iconAdd" onclick='edit(${i})'><i class='fas fa-edit' style='font-size:24px'></i></button>
                        </div>
                        <div class="center">
                             <textarea name="" class="txt" cols="auto" id="txt_${i}"></textarea>    
                        </div>`
    container.appendChild(card) 
    const iconDelete = document.querySelector('.iconDelete')
    i++
}   
function Delete(i) {
    let elt = document.getElementById('id_'+i)
    elt.remove()
    console.log(elt)
}
function edit(li) {
    let edit = document.getElementById('txt_'+li) 
     console.log(edit)
    edit.toggleAttribute('disabled') 
    edit.focus() 
}


//EVENTS
btnAdd.addEventListener('click', function(){
    createCard()
})

