//  ----- ZADANIE 9.3 -----

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinosaurUpperCased);

console.log (newText.slice(0, newText.length/2));







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