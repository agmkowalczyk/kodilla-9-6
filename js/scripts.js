
//  ----- ZADANIE 9.6 -----

var list = document.getElementById('list'),
    //add = document.getElementById('addElem');
    add = document.getElementsByTagName('button');

add[0].addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item ' + document.getElementsByTagName('li').length;
    list.appendChild(element);
});







/*
//  ----- ZADANIE 9.5 -----

var classButton = document.getElementsByClassName('button');

for (i=0; i < classButton.length; i++) {
  alert (classButton[i].innerText);
}
*/




/*
//  ----- ZADANIE 9.4 -----
drawTree(6);

function drawTree(rows) {
  for (var i = 1; i <= rows; i++) {
    var star = '';
    for (var j = 0; j < i; j++) {
      star += '*';
    }
   console.log(star); 
  }
}
*/


/*
//  ----- ZADANIE 9.3 -----

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinosaurUpperCased);

console.log (newText.slice(0, newText.length/2));
*/



/*
//  ----- ZADANIE 9.2 -----

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotr', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = "Michał";

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  console.log( 'Imię "' + newName + '" zostało dodane.');
} else {
  console.log( 'Imię "' + newName + '" jest już na liście.');
}
*/



/*
//  ----- ZADANIE 9.1 -----

var triangleArea;
function getTriangleArea( a, h ) {
  if ( a > 0 && h > 0 ) {
    return triangleArea === (a * h / 2);
  } else {
    console.log( '--Nieprawidłowe dane--' );
  }
}

console.log(getTriangleArea( 5, 1 ));

var triangle1Area = getTriangleArea( 10, 15 );
var triangle2Area = getTriangleArea( 4, 6 );
var triangle3Area = getTriangleArea( -3, 7 );


//https://github.com/jamesallardice/jslint-error-explanations/blob/master/message-articles/return-conditional.md

*/