console.log( 'js' );


// parkCar Funtion
//----------------

let parkedCars = [];
const maxCars = 5;

console.log( 'in parkCar' );

function parkCar( nameOfCar ){
  if( parkedCars.length < maxCars ){
    parkedCars.push( nameOfCar );
    console.log( 'Is in the garage:', nameOfCar );
    return true;
  } // end if
  else{
    console.log( 'Is in the garage:', nameOfCar );
    return false;
  } // end else
} // end parkCar

console.log( parkCar( 'Ford Explorer' ) );
console.log( parkCar( 'Nisson GTR' ) );
console.log( parkCar( 'Chevy Cruise' ) );
console.log( parkCar( 'Audi RS 5 Sportback' ) );
console.log( parkCar( 'Toyota Highlander' ) );
console.log( parkCar( 'Jeep Wrangler' ) );



// Stretch Goals!!!
//=================
// isParkedHere function
//----------------------

console.log( 'in isParkedHere' );

function isParkedHere( nameOfCar ){
  for( let i=0; i<maxCars; i++ ){
    parkedCars.push( nameOfCar );
    console.log( 'Is the', nameOfCar , 'parked in the garage?' );
    if( nameOfCar === parkedCars[ i ] ){
      return true;
    } // end if
  } // end for
  return false;
} // end isParkedHere

console.log( isParkedHere( 'Ford Explorer' ) );
console.log( isParkedHere( 'Nisson GTR' ) );
console.log( isParkedHere( 'Chevy Cruise' ) );
console.log( isParkedHere( 'Audi RS 5 Sportback' ) );
console.log( isParkedHere( 'Toyota Highlander' ) );
console.log( isParkedHere( 'Jeep Wrangler' ) );
