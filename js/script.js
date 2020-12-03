// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
//completata

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
//completata

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

$(document).ready(
  function () {

  const icons = [
        {
          name: "dog",
          prefix: "fa-",
          type: "animal",
          family: "fas"
        },
        {
          name: "fish",
          prefix: "fa-",
          type: "animal",
          family: "fas"
        },
        {
          name: "tractor",
          prefix: "fa-",
          type: "vehicle",
          family: "fas"
        },

        {
          name: "apple-alt",
          prefix: "fa-",
          type: "vegetable",
          family: "fas"
        },
        {
          name: "carrot",
          prefix: "fa-",
          type: "vegetable",
          family: "fas"
        },
        {
          name: "space-shuttle",
          prefix: "fa-",
          type: "vehicle",
          family: "fas"
        },
      ];
  const container = $(".container");

  const typeIcon = getIconType(icons);

  const typeColor = [
    "red",
    "blue",
    "coral"
  ];

  const coloredIcons = addColor(icons, typeColor, typeIcon);

  console.log(coloredIcons);

  iconToContainer(coloredIcons, container);

});


// funzioni ------------------------------

function iconToContainer(array, container) {

  container.html("");

  array.forEach(
    (element) => {
      container.append(`
        <div>
        <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i
        </div>
      `)
    }
  );

}

function getIconType(array) {
  const typeIcon = [];
  array.forEach(
    (element) => {
      if (typeIcon.includes(element.type) == false)
      typeIcon.push(element.type)

    }


  );
  return typeIcon;
}

function addColor(array, colorArray, type) {
  const secondArray = array.map(
    (element) => {
      const typePosition = type.indexOf(element.type)
      console.log(element.type, typePosition);
      const color = colorArray[typePosition];
      const newObjectElement = {
        ...element,
        color: color
      };
      return newObjectElement;
    }
  )
  return secondArray
}
