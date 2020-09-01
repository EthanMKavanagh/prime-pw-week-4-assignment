console.log( 'js' );


// parkCar Function
//----------------

let parkedCars = [];
const maxCars = 5;


function parkCar( color, nameOfCar ){
  console.log( 'in parkCar' );
  if( parkedCars.length < maxCars ){
    parkedCars.push( nameOfCar );
    console.log( 'Can I park the', color, nameOfCar, 'in the garage?' );
    return true;
  } // end if
  else{
    console.log( 'Can I park the', color, nameOfCar, 'in the garage?' );
    return false;
  } // end else
} // end parkCar

console.log( parkCar( 'black', 'Ford Explorer' ) );
console.log( parkCar( 'blue', 'Nisson GTR' ) );
console.log( parkCar( 'orange', 'Chevy Cruise' ) );
console.log( parkCar( 'green', 'Audi RS 5 Sportback' ) );
console.log( parkCar( 'red', 'Toyota Highlander' ) );
console.log( parkCar( 'purple', 'Jeep Wrangler' ) );



// Stretch Goals!!!
//=================
// isParkedHere function
//----------------------


function isParkedHere( color, nameOfCar ){
  console.log( 'in isParkedHere' );
  for( let i=0; i<maxCars; i++ ){
    parkedCars.push( nameOfCar );
    if( nameOfCar === parkedCars[ i ] ){
      console.log( 'Is the', color, nameOfCar, 'parked in the garage?' );
      return true;
    } // end if
  } // end for
  console.log( 'Is the', color, nameOfCar, 'parked in the garage?' );
  return false;
} // end isParkedHere

console.log( isParkedHere( 'black', 'Ford Explorer' ) );
console.log( isParkedHere( 'blue', 'Nisson GTR' ) );
console.log( isParkedHere( 'orange', 'Chevy Cruise' ) );
console.log( isParkedHere( 'green', 'Audi RS 5 Sportback' ) );
console.log( isParkedHere( 'red', 'Toyota Highlander' ) );
console.log( isParkedHere( 'purple', 'Jeep Wrangler' ) );



// takeForASpin function
//---------------------


function takeForASpin( color, nameOfCar ){
  console.log( 'in takeForASpin' );
  if( isParkedHere( color, nameOfCar ) ){
    parkedCars.splice( (parkedCars.indexOf( nameOfCar ) ), 1 );
    console.log( 'Is', color, nameOfCar, 'ready to be taken out for a spin?' );
    return true;
  } // end if
  console.log( 'Is', color, nameOfCar, 'ready to be taken out for a spin?' );
  return false;
} // takeForSpin

console.log( takeForASpin( 'black', 'Ford Explorer' ) );
console.log( takeForASpin( 'blue', 'Nisson GTR' ) );
console.log( takeForASpin( 'orange', 'Chevy Cruise' ) );
console.log( takeForASpin( 'green', 'Audi RS 5 Sportback' ) );
console.log( takeForASpin( 'red', 'Toyota Highlander' ) );
console.log( takeForASpin( 'purple', 'Jeep Wrangler' ) );
