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