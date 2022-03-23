let arraySide = [   
  
    {
        icon: "bx bxs-dashboard ",
        iconCercle: "bx bx-circle ",
        text: "Dashboard",
        textBadge: "",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    },
    {
        icon: "bx bxs-widget ",
        iconCercle: "bx bx-circle ",
        text: "Widgets",
        textBadge: "New",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    },
    {
        icon: "bx bxs-layout ",
        iconCercle: "bx bx-circle ",
        text: "Layout Option",
        textBadge: "",
        numBadge: "6",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    },
    {
        icon: "bx bxs-pie-chart-alt-2 ",
        iconCercle: "bx bx-circle ",
        text: "Charts",
        textBadge: "",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu: [
            "chartJS",
            "Flot",
            "inline",
            "uPlot"
        ]  
    },
    {
        icon: "bx bxs-tree ",
        iconCercle: "bx bx-circle ",
        text: "UI Elements",
        textBadge: "",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    },
    {
        icon: "bx bx-edit ",
        iconCercle: "bx bx-circle ",
        text: "Forms",
        textBadge: "",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    },
    {
        icon: "bx bx-table ",
        iconCercle: "bx bx-circle ",
        text: "Tables",
        textBadge: "",
        numBadge: "",
        menu: "bx bx-chevron-left",
        sousMenu:[]
    }
]





const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
const ul = body.querySelector('.menu-links')

const divSousMenu = document.createElement('div') 

arraySide.forEach(elt => {

    
        const li = document.createElement('li');
        const a = document.createElement('a');
        const i = document.createElement('i');
        const span = document.createElement('span');
        const tBadge = document.createElement('span');
        const nBadge = document.createElement('span');
        const iMenu = document.createElement('i')
        const divSousMenu = document.createElement('div');


        //setAttribut
        
        li.setAttribute('class', 'nav-link')
        i.setAttribute('class', elt.icon+' icon')
        span.setAttribute('class', 'text nav-text');
        span.innerText = elt.text;
        tBadge.innerText =  elt.textBadge;
        nBadge.innerText =  elt.numBadge;
        tBadge.setAttribute('class', 'textBadge');
        nBadge.setAttribute('class', 'numBadge');
        if(elt.sousMenu!=""){
            iMenu.setAttribute('class', elt.menu)
        }
        iMenu.setAttribute('id', 'iconing')
        iMenu.classList.add('menuIcon')
        

        elt.sousMenu.forEach(sm=>{
            const li2 = document.createElement('li');
            const a2 = document.createElement('a');
            const i2 = document.createElement('i');
            const span2= document.createElement('span');
            const tBadge2 = document.createElement('span');
            const nBadge2 = document.createElement('span');
            const iMenu2 = document.createElement('i')

            li2.setAttribute('class', 'nav-link')
            i2.setAttribute('class', elt.iconCercle+' icon')
            span2.setAttribute('class', 'text nav-text');
            span2.innerText = sm;
            tBadge2.innerText =  "";
            nBadge2.innerText =  "";
            tBadge2.setAttribute('class', 'textBadge');
            nBadge2.setAttribute('class', 'numBadge');
            iMenu2.setAttribute('class', "elt.menu")
            iMenu2.setAttribute('id', 'iconing')
            iMenu2.classList.add('menuIcon')
            a2.append(i2,span2, tBadge2,nBadge2,iMenu2);
            li2.appendChild(a2);
            divSousMenu.appendChild(li2)

        })
        //Append
        divSousMenu.setAttribute('hidden', 'hidden')
        a.append(i,span, tBadge,nBadge,iMenu);
        li.appendChild(a);
        ul.appendChild(li);
        ul.appendChild(divSousMenu);

   
});



const fle = document.querySelectorAll(".bx-chevron-left")
fle.forEach(elem=>{
    elem.addEventListener('click', ()=>{
        elem.classList.toggle('sous_menu')
      elem.parentElement.parentElement.nextElementSibling.toggleAttribute("hidden")
    //   elem.parentElement.toggleAttribute("hidden")
    })
})

//function
function createMenu(icon, text, textBadge='',numBadge='', menu=''){
   
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i');
    const span = document.createElement('span');
    const tBadge = document.createElement('span');
    const nBadge = document.createElement('span');
    const iMenu = document.createElement('i')

  

//setAttribut
li.setAttribute('class', 'nav-link')
i.setAttribute('class', icon+' icon')
span.setAttribute('class', 'text nav-text');
span.innerText = text;
tBadge.innerText =  textBadge;
nBadge.innerText =  numBadge;
tBadge.setAttribute('class', 'textBadge');
nBadge.setAttribute('class', 'numBadge');
iMenu.setAttribute('class', menu)
iMenu.setAttribute('id', 'iconing')
iMenu.classList.add('menuIcon')



//AppenChild


a.append(i,span, tBadge,nBadge,iMenu);
li.appendChild(a);
ul.appendChild(li);

// console.log(li)
return li;



}



toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})
