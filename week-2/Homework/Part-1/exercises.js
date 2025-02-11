/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
 function exerciseOne(arrayOfPeople) { //Ya estaba escrito en el ejercicio.
  let content = document.querySelector("#content"); //Ya estaba escrito en el ejercicio.

  arrayOfPeople.forEach(person => {
    let titleH1 = document.createElement("h1"); //Creamos elemento h1
    titleH1.append(person.name); 
    /* elemento.append() - Añadir o insertar contenido al final del elemento seleccionado.*/

    let titleH2 = document.createElement("h2"); //Creamos elemento h2
    titleH2.append(person.job);

    content.append(titleH1, titleH2); 
  });
}

/* No es lo que solicitan en el ejercicio, ya que las entrandas están más abajo.
function exerciseOne(arrayOfPeople) { //Ya estaba escrito en el ejercicio.
  let content = document.querySelector("#content"); //Ya estaba escrito en el ejercicio.

  let titleH1 = document.createElement("h1"); //Creamos elemento h1
  titleH1.textContent = "Nancy González"; //Agrego texto que va dentro de h1
  content.appendChild(titleH1);

  let titleH2 = document.createElement("h2"); //Creamos elemento h2
  titleH2.textContent = "Psicopedagogía"; //Agrego texto que va dentro de h2
  content.appendChild(titleH2);
}
*/

//--------------------------------------------------------------------------------------------------------------

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) { //Ya estaba escrito en el ejercicio.
  //Write your code in here
  //const content = document.querySelector("#content");
  let unorderedList = document.createElement('ul'); //Se crea elemento para lista desordenada
  content.appendChild(unorderedList); //Lista desordenada está dentro del div content

  shopping.forEach(item => {
    let list = document.createElement('li'); //Se crea 1er elemento de la lista
    list.innerHTML = item;
    unorderedList.appendChild(list);
  });
};

/* No es lo que solicitan en el ejercicio, ya que las entrandas están más abajo.
function exerciseTwo(shopping) { //Ya estaba escrito en el ejercicio.
  //Write your code in here
  let unorderedList = document.createElement('ul'); //Se crea elemento para lista desordenada
  content.appendChild(unorderedList); //Lista desordenada está dentro del div content

  let item1List = document.createElement('li'); //Se crea 1er elemento de la lista
  let item1Text = document.createTextNode("Libro: Psicopedagogia de la lengua escrita. Vol I"); //Texto que va en el 1er elemento
  item1List.appendChild(item1Text); //El texto va dentro del elemento.

  let item2List = document.createElement('li'); //Se crea 2do elemento de la lista
  let item2Text = document.createTextNode("Cuaderno.");
  item2List.appendChild(item2Text);

  let item3List = document.createElement('li');
  let item3Text = document.createTextNode("Bolígrafos, lápices y colores.");
  item3List.appendChild(item3Text);

  let item4List = document.createElement('li');
  let item4Text = document.createTextNode("Silla de oficina ergonomica.");
  item4List.appendChild(item4Text);

  //Elementos que van dentro de la lista desordenada.
  unorderedList.appendChild(item1List); 
  unorderedList.appendChild(item2List);
  unorderedList.appendChild(item3List);
  unorderedList.appendChild(item4List);
}
 */

//--------------------------------------------------------------------------------------------------------------

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/


function exerciseThree(books) { //Ya estaba escrito en el ejercicio.
  //Write your code in here
  const booklist = document.createElement("ul");
  
  books.forEach( book => { 
    const bookItemLi = document.createElement("li");
    const bookDetailsP = document.createElement("p");
    bookDetailsP.textContent = `${book.title} - ${book.author}`;

    const bookImage = document.createElement("img"); //Declaro elemento imagen
    bookImage.setAttribute("src",book.imageBook);
    bookImage.style.width = "180px";

    bookItemLi.appendChild(bookDetailsP);
    bookItemLi.appendChild(bookImage);
    booklist.appendChild(bookItemLi);

    if (book.alreadyRead) { //Color a la lista de libros
      bookItemLi.style.backgroundColor = "green";
    } else {
      bookItemLi.style.backgroundColor = "red";
    };
  });
  document.body.appendChild(booklist);
};

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageBook: "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageBook: "https://images-na.ssl-images-amazon.com/images/I/41Z56GwEv9L._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageBook: "https://m.media-amazon.com/images/S/aplus-media/vc/fb71c565-0ec5-44b3-81e1-848bbcccb96f._CR0,5,516,516_PT0_SX300__.jpg",
  }
];

exerciseThree(books);
