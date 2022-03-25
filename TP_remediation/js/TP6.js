
const divrecette=document.querySelector(".recette");
const modalContainer=document.querySelector(".modal-container");
const recherche = document.querySelector('.recherche')
const btn = document.querySelector('#btn')


const APIRECETTE = `https://www.themealdb.com/api/json/v1/1/random.php`
const Api_Id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`
const Api_name = `https://www.themealdb.com/api/json/v1/1/search.php?s=`

fetch(APIRECETTE)
        .then(function(response){
            return response.json()
        })
        .then(function(resultat){
            resultat.meals.forEach(meal => {
                let mealTitre = meal.strMeal;
                let mealImage = meal.strMealThumb;
                let mealDescription = meal.strInstructions;
                let mealCategorie = meal.strCategory;
               
                    createRecette(mealTitre,mealImage)

                    modalContainer.innerHTML = `
                    <div class="modal">
                        <div class="modal-header">
                            <p class="modal-title">${mealTitre}</p>
                            <p class="modal-close">x</p>
                        </div>
        
                    
                        <div class="modal-main">
                            <div class="modal-img"><img src= ${mealImage} class="img2" alt=""></div>
                            <p class="modal-descr">${mealDescription}</p>
                            <div class="modal-ingredient">
                                <p class="ingre-title">Ingredients:</p>
                                <div class="ingred-content">
                                    <ul id="id_ul">
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                 `
                 const heart = document.querySelector('.heart')
                 heart.addEventListener('click', ()=>{
                    modalContainer.classList.add('show-modal')
                 })
                 const ulContent = document.getElementById('id_ul')
                 for (let i = 1; i < 20; i++) {
                     let liContent = document.createElement('li')
                        let mealIngredient =meal[`strIngredient${i}`]
                        if (mealIngredient!="") {
                            liContent.textContent=mealIngredient;
                            ulContent.appendChild(liContent);
                        }
                       
                   }
            });
        })

//Event 
btn.addEventListener('click', ()=>{
    let inp = recherche.value;
    if (inp.match(/\d/)) { 
        fetch(Api_Id+inp)
        .then(function(response){console.log(response.json())
            return response.json() ; 
        })
        .then(function(resultat){
            resultat.meals.forEach(meal => {
            let mealTitre = meal.strMeal;
            let mealImage = meal.strMealThumb;
            let mealDescription = meal.strInstructions;
            let mealCategorie = meal.strCategory;
           
                createRecette(mealTitre,mealImage)

                modalContainer.innerHTML = `
                <div class="modal">
                    <div class="modal-header">
                        <p class="modal-title">${mealTitre}</p>
                        <p class="modal-close">x</p>
                    </div>
    
                
                    <div class="modal-main">
                        <div class="modal-img"><img src= ${mealImage} class="img2" alt=""></div>
                        <p class="modal-descr">${mealDescription}</p>
                        <div class="modal-ingredient">
                            <p class="ingre-title">Ingredients:</p>
                            <div class="ingred-content">
                                <ul id="id_ul">
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
             `
             const heart = document.querySelector('.heart')
             heart.addEventListener('click', ()=>{
                modalContainer.classList.add('show-modal')
             })
             const ulContent = document.getElementById('id_ul')
             for (let i = 1; i < 20; i++) {
                 let liContent = document.createElement('li')
                    let mealIngredient =meal[`strIngredient${i}`]
                    if (mealIngredient!="") {
                        liContent.textContent=mealIngredient;
                        ulContent.appendChild(liContent);
                    }   
               }
            });
        })
    }
    else if (inp.match(/[a-zA-Z]/)) { 
        fetch(Api_name+inp)
        .then(function(response){
            return response.json()
        })
        .then(function(resultat){
            resultat.meals.forEach(meal => {
            let mealTitre = meal.strMeal;
            let mealImage = meal.strMealThumb;
            let mealDescription = meal.strInstructions;
            let mealCategorie = meal.strCategory;
           
                createRecette(mealTitre,mealImage)

                modalContainer.innerHTML = `
                <div class="modal">
                    <div class="modal-header">
                        <p class="modal-title">${mealTitre}</p>
                        <p class="modal-close">x</p>
                    </div>
    
                
                    <div class="modal-main">
                        <div class="modal-img"><img src= ${mealImage} class="img2" alt=""></div>
                        <p class="modal-descr">${mealDescription}</p>
                        <div class="modal-ingredient">
                            <p class="ingre-title">Ingredients:</p>
                            <div class="ingred-content">
                                <ul id="id_ul">
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
             `
             const heart = document.querySelector('.heart')
             const modal_close = document.querySelector('.modal-close');
              
             heart.addEventListener('click', ()=>{
                modalContainer.classList.add('show-modal'); 
             })
             modal_close.addEventListener('click', ()=>{
                 alert('ok')
                modalContainer.remove();
             })
             const ulContent = document.getElementById('id_ul')
             for (let i = 1; i < 20; i++) {
                 let liContent = document.createElement('li')
                    let mealIngredient =meal[`strIngredient${i}`]
                    if (mealIngredient!="") {
                        liContent.textContent=mealIngredient;
                        ulContent.appendChild(liContent);
                    }   
               }
            });
        })
    }
    
})

function createRecette(titre,mealImage) {
    const divimageGenere=document.createElement('div');
    const image = document.createElement('img');
    const p = document.createElement('p');
    const divfooter = document.createElement('div');
    const footerP = document.createElement('p')
    const footerI = document.createElement('i');
    
    p.textContent='Generer une recette'
    image.setAttribute('src', mealImage)
    divimageGenere.setAttribute('class','imageGenere')
    divfooter.setAttribute('class', 'footer')
    footerP.textContent=titre;
    footerI.setAttribute('class',"fa-solid fa-heart heart")
    divimageGenere.append(p,image)
    divfooter.append(footerP,footerI);
    divrecette.append(divimageGenere,divfooter)
}

function createModal(titre,image) {
    const divmodal=document.createElement('div');
    const divmodal_header = document.createElement('div');
    const modal_title = document.createElement('p');
    const modal_close = document.createElement('p');
    const modal_main = document.createElement('div');
    const modal_img = document.createElement('div');
    const modalImg_img = document.createElement('img')
    const modal_descr= document.createElement('p');
    const modal_ingredient = document.createElement('div');
    const ingre_title= document.createElement('p');
    const ingred_content= document.createElement('p');



    modal_title.textContent=titre;
    modal_close.textContent="x";
    modal_title.setAttribute('class','modal-title')
    modal_close.setAttribute('class','modal-close')
    modal_descr.setAttribute('class','modal-descr')
    modal_ingredient.setAttribute('class', 'modal-ingredient')
    ingre_title.setAttribute('class', 'ingre-title')
    ingred_content.setAttribute('class', 'ingred-content')
    modal_img.setAttribute('class', 'modal-img')
    modalImg_img.setAttribute('src', image)
    modal_main.setAttribute('class', 'modal-main')
    divmodal_header.setAttribute('class','modal-header')
    divmodal.setAttribute('class', 'modal')


    divmodal_header.append(modal_title,modal_close)
    divmodal.append(divmodal_header)
    modal_ingredient.append(ingre_title,ingred_content)
    modal_img.appendChild(modalImg_img)
    modal_main.append(modal_img,modal_descr,modal_ingredient)
    modalContainer.append(divmodal,modal_main)
}




