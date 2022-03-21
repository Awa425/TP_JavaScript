let arraySide = [   
    // {
    //     icon: "bx bx-search icon",
    //     text: "Search",
    //     input: "",
    //     menu: []
    // },
    {
        icon: "bx bxs-dashboard icon",
        text: "Dashboard",
        input: "",
        menu: "bx bx-chevron-left",
    },
    {
        icon: "bx bxs-widget icon",
        text: "Widgets",
        input: "New",
        menu: "bx bx-chevron-left"
    },
    {
        icon: "bx bxs-layout icon",
        text: "Layout Option",
        input: "6",
        menu: "bx bx-chevron-left"
    },
    {
        icon: "bx bxs-pie-chart-alt-2 icon",
        text: "Charts",
        input: "",
        menu: "bx bx-chevron-left"
        // menu: [
        //     "chartJS",
        //     "Flot",
        //     "inline",
        //     "uPlot"
        // ]  
    },
    {
        icon: "bx bxs-tree icon",
        text: "UI Elements",
        input: "",
        menu: "bx bx-chevron-left"
    },
    {
        icon: "bx bx-edit icon",
        text: "Forms",
        input: "",
        menu: "bx bx-chevron-left"
    },
    {
        icon: "bx bx-table icon",
        text: "Tables",
        input: "",
        menu: "bx bx-chevron-left"
    }
]





const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
const ul = body.querySelector('.menu-links')

arraySide.forEach(elt => {
    createMenu(elt.icon, elt.text, elt.menu)
});

//function
function createMenu(icon, text, menu){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const i = document.createElement('i');
    const span = document.createElement('span');
    const iMenu = document.createElement('i')


//setAttribut
li.setAttribute('class', 'nav-link')
i.setAttribute('class', icon)
span.setAttribute('class', 'text nav-text');
span.innerText = text;
iMenu.setAttribute('class', menu)


//AppenChild

ul.appendChild(li);
li.appendChild(a);
a.appendChild(i);
a.appendChild(span);
a.appendChild(iMenu)
}



toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})
