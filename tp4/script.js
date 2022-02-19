const myList = [
    {
        Question: 'Quel est le meilleur language de programmation en 2022',
        a: 'Java',
        b: 'HTML',
        c: 'C++',
        d: 'PHP',
        correct: 'Java'
    },
    {
        Question: 'Trouver intrus',
        a: 'Java',
        b: 'C++',
        c: 'Chrome',
        d: 'HTML',
        correct: 'Chrome'
    },
    {
        Question: 'Trouver intrus',
        a: 'Java',
        b: 'firefox',
        c: 'Chrome',
        d: 'Internet explore',
        correct: 'java'
    }
]
const container = document.getElementById('container')
const reponse = document.querySelectorAll('.reponse')
const question = document.getElementById('question')
const rep_a = document.getElementById('rep_a')
const rep_b = document.getElementById('rep_b')
const rep_c = document.getElementById('rep_c')
const rep_d = document.getElementById('rep_d')
const submit = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

build()

function build() {

    desactiveReponse()

    //recupere l'objet de l'indice currentQuiz puis l'afficher
    const currentList = myList[currentQuiz]
    question.innerText = currentList.Question
    rep_a.innerHTML = currentList.a
    rep_b.innerText = currentList.b
    rep_c.innerText = currentList.c
    rep_d.innerText = currentList.d
}

function desactiveReponse() {
    reponse.forEach(rep=>rep.checked=false)
    
}

function getSelect() {
    let eltSelect
    reponse.forEach(reponse=>{
        if (reponse.checked) {
            reponse = reponse.id
            // console.log(reponse)
            // console.log(myList.reponse)

        }
    })
    return reponse
}

submit.addEventListener('click', ()=>{
    const reponse = getSelect(); 
    if(reponse){   
        if (reponse === myList[currentQuiz]) {
            score++ ; 
        }
        currentQuiz++
        if (currentQuiz < myList.length) {
            build();
        }
        else{
            container.innerHTML=`
            <h2>Vous avez ${score} correct sur ${myList.length}  </>  
            <button onclick='location.reload()'>Reload</button> `
        }
    }
});