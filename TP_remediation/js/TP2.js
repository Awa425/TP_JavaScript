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
        menu: [],
    },
    {
        icon: "bx bxs-widget icon",
        text: "Widgets",
        input: "New",
        menu: []
    },
    {
        icon: "bx bxs-layout icon",
        text: "Layout Option",
        input: "6",
        menu: []
    },
    {
        icon: "bx bxs-pie-chart-alt-2 icon",
        text: "Charts",
        input: "",
        menu: [
            "chartJS",
            "Flot",
            "inline",
            "uPlot"
        ]  
    },
    {
        icon: "bx bxs-tree icon",
        text: "UI Elements",
        input: "",
        menu: []
    },
    {
        icon: "bx bx-edit icon",
        text: "Forms",
        input: "",
        menu: []
    },
    {
        icon: "bx bx-table icon",
        text: "Tables",
        input: "",
        menu: []
    }
]

const sidebar = document.querySelector('.sidebar');
const menu_sideBar = document.querySelector('.menu-sidebar')
const items = document.querySelector('.items');



arraySide.forEach(elt => {
    biutItems(elt.icon,elt.text)
});


function biutItems(icon, txt) {
    const divItems = document.createElement('div');
    const divIcon = document.createElement('div')
    const i_iconIcon = document.createElement('i');
    const text = document.createElement('div');
    const input = document.createElement('div');
    const fleche = document.createElement('div');


// Set Attribute
    divItems.setAttribute('class', 'items');
    divIcon.setAttribute('class', "icon");
    text.setAttribute('class', "text");
    input.setAttribute('class', 'input');
    fleche.setAttribute('class', 'fleche');
    i_iconIcon.setAttribute('class', icon);
    text.innerText=txt;

//Append child

    divItems.appendChild(divIcon)
    divItems.appendChild(text);
    divItems.appendChild(input);
    divItems.appendChild(fleche);
    divIcon.appendChild(i_iconIcon);
    menu_sideBar.appendChild(divItems)

}



// function biutItems(icon, text, input, menu)



