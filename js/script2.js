console.log('JS OK');

// Prendo l'elemento dal DOM
const targetElement = document.getElementById('target');

//Inserisco la lista della spesa, in un Array
const shoppingList = ['pane', 'pasta', 'latte', 'origano', 'sale'];


// Metodo per stampare in pagina con i nodi

let i = 0;

while (i < shoppingList.length){
  shopping = shoppingList[i];
  const itemElement = document.createElement('li');
  itemElement.append(shopping);
  targetElement.appendChild(itemElement);
  i++;
}
  






