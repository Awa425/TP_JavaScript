const btn_group = document.querySelector('.btn-group');
const btns = document.querySelectorAll('.btn')
const generate = document.querySelector('.generate');

// console.log(btns); 
 
btns.forEach((btn,i) => {
    if(i==0){btn.setAttribute('class', 'green')}
    if(i==1){btn.setAttribute('class', 'red')}
    if(i==2){btn.setAttribute('class', 'yellow')}
    if(i==3){btn.setAttribute('class', 'blue')}

       btn.addEventListener('click',()=>{
           generate.innerHTML= "";
            if(i==0){

                const newDiv = document.createElement('div');
                const p = document.createElement('p');

                newDiv.setAttribute('class', 'generate-div');
                p.innerText = `Mon Projet ${i+1}`;
                newDiv.setAttribute('class', 'success')

                generate.appendChild(newDiv);
                newDiv.appendChild(p);
            }
            else if(i==1){
                const newDiv = document.createElement('div');
                const p = document.createElement('p');

                newDiv.setAttribute('class', 'generate-div');
                p.innerText = `Mon Projet ${i+1}`;
                newDiv.setAttribute('class', 'danger')

                generate.appendChild(newDiv);
                newDiv.appendChild(p);
            }
            else if(i==2){
                const newDiv = document.createElement('div');
                const p = document.createElement('p');

                newDiv.setAttribute('class', 'generate-div');
                p.innerText = `Mon Projet ${i+1}`;
                newDiv.setAttribute('class', 'warming')

                generate.appendChild(newDiv);
                newDiv.appendChild(p);
            }
            else if(i==3){
                const newDiv = document.createElement('div');
                const p = document.createElement('p');

                newDiv.setAttribute('class', 'generate-div');
                p.innerText = `Mon Projet ${i+1}`;
                newDiv.setAttribute('class', 'info')

                generate.appendChild(newDiv);
                newDiv.appendChild(p);
            }
       });
    
   

});