//DOM
const btnAdd = document.getElementById('btnAdd')
const container = document.getElementById('container')
const text = document.getElementById('icon') 








//FONCTIONS 
function createCard() {
    const card = document.createElement('div');
    card.setAttribute('class', 'card')
    card.innerHTML = `  <div class="header">
                            <button class="icon" id="iconDelete">delete</button>
                            <button class="icon" id="iconAdd">Add</button>
                        </div>
                        <div class="center">
                             <textarea name="" id="" cols="34" rows="24"></textarea>    
                        </div>`
    container.appendChild(card) 
    const iconDelete = document.getElementById('iconDelete')
    
}   





//EVENTS
btnAdd.addEventListener('click', function(){
    createCard()
})

iconDelete.addEventListener('click', createCard)