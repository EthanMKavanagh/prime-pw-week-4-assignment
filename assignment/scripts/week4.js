console.log( 'js' );

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



// Stretch Goals
// isParkedHere function
/*
- funtion isParkedHere that recieves cars
- run "isParkedHere('Ford Explorer')"
  - return true if in garage
  - return false if not in garage
*/
parkedCars = [ 'Ford Explorer', 'Nisson GTR', 'Chevy Cruise', 'Audi RS 5 Sportback' ];

function isParkedHere( nameOfCar ){
  console.log( 'in isParkedHere' );
  for( let i=0; i<parkedCars.length; i++ ){

  }
} // end isParkedHere

// isParkedHere( 'Ford Explorer' );
// isParkedHere( 'Nisson GTR' );
// isParkedHere( 'Chevy Cruise' );
// isParkedHere( 'Audi RS 5 Sportback' );

// console.log( isParkedHere() );
