console.log('JS OK');

// Prendo l'elemento dal DOM
const targetElement = document.getElementById('target');

//Inserisco la lista della spesa, in un Array
const shoppingList = ['pane', 'pasta', 'latte', 'origano', 'sale'];


let myList = '<ul>';

let i = 0;

while (i < shoppingList.length){
    myList += `<li>${shoppingList[i]}</li>`;
    i++;
}


myList += '</ul>';


// Stampo la lista in pagina

targetElement.innerHTML = myList;
