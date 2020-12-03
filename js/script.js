// Esercizio: seguire le 3 milestone dell'esercizio delle Icone visto insieme stamattina.
// Consigli:
// prima di passare alla milestone 2, completate ogni aspetto della 1;
// preparate un html/css base per gestire le milestone e miglioratelo successivamente, solo se avete completato le 3 milestone;
// è meglio chiudere una sola milestone bene, piuttosto che farle tutte e 3 ma lasciandosi alle spalle delle cose non corrette.



// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

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

  iconToContainer(icons, container);

  const typeIcon = getIconType(icons);


  console.log(typeIcon);






      // definire un array di colori e associare ad ogni
      // tipo di icona un colore.
      // Visualizzare le icone di colore diverso in base al
      // tipo.

      // creo un array dove andrò a inserire le tipologie di icone, senza ripetizioni, e un array di colori
      // const typeColor = [
      //   "orange",
      //   "blue",
      //   "coral"
      // ];
      //
      // const typeIcon = [];
      // icons.forEach (
      //   (element) => {
      //     if (typeIcon.includes(element.type) == false)
      //     typeIcon.push(element.type)
      //   }
      // )
      // console.log(typeIcon);


      // const secondArray = icons.map(
      //   (element) => {
      //     const typePosition = typeIcon.indexOf(element.type)
      //     console.log(element.type, typePosition);
      //     const color = typeColor[typePosition];
      //     const newObjectElement = {
      //       ...element,
      //       color
      //     };
      //     return newObjectElement;
      //   }
      // )
      // return secondArray

});


// funzioni ------------------------------

function iconToContainer(array, container) {

  container.html("");

  array.forEach(
    (element) => {
      container.append(`
        <div>
        <i class="${element.family} ${element.prefix}${element.name}"></i
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
