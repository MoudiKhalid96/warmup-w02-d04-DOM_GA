/*
Change the font-family of the page to "Arial, sans-serif"

Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)

Give each li the class of "listitem"

Change each li's text color to "rebeccapurple"

Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
*/
//==============EX. 1==============
//change font-family
document.body.style.fontFamily = "Arial, sans-serif";

//change content of li's
document.getElementsByTagName('li').innerHTML = "Sara";
document.getElementById('nickname').innerHTML = "Moudi";
document.getElementById('favorite').innerHTML = "Cat";
document.getElementById('hometown').innerHTML = "Riyadh, KSA";


//add new class and change color to "rebeccapurple"
let length = document.getElementsByTagName('li').length;

for(let i=0 ; i<length ; i++){
    document.getElementsByTagName('li')[i].classList.add('listitem');//add class
    document.getElementsByTagName('li')[i].style.color = "rebeccapurple";// change color
}//end for loop.

//create image and insert it inside div with class 'profilePicture'
let image = document.createElement('img');
let division = document.createElement('div');

image.setAttribute('src', 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
image.setAttribute('width', '100px');
image.setAttribute('height', '100px');

division.setAttribute('class', 'profilePicture');

document.getElementsByClassName('profilePicture')[0].appendChild(image);



//==============EX. 2==============
var books = [
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
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];

/**
In your JavaScript file:

Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks

Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page 
*/

let h1 = document.createElement('h1');
let text = document.createTextNode('My Book List');
h1.appendChild(text);

document.getElementsByClassName('favoriteBooks')[0].appendChild(h1);

for(let i=0 ; i<books.length ; i++){
    let p = document.createElement('p');
    text = document.createTextNode(books[i].title + ', by '+ books[i].author);
    p.appendChild(text);
    document.getElementsByClassName('favoriteBooks')[0].appendChild(p);
}
