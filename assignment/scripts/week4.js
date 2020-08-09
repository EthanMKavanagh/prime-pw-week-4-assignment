console.log( 'js' );


// parkCar Funtion
//----------------

let parkedCars = [];
const maxCars = 5;


function parkCar( nameOfCar ){
  console.log( 'in parkCar' );
  if( parkedCars.length < maxCars ){
    parkedCars.push( nameOfCar );
    console.log( 'Can I park the', nameOfCar, 'in the garage?' );
    return true;
  } // end if
  else{
    console.log( 'Can I park the', nameOfCar, 'in the garage?' );
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


function isParkedHere( nameOfCar ){
  console.log( 'in isParkedHere' );
  for( let i=0; i<maxCars; i++ ){
    parkedCars.push( nameOfCar );
    if( nameOfCar === parkedCars[ i ] ){
      console.log( 'Is the', nameOfCar , 'parked in the garage?' );
      return true;
    } // end if
  } // end for
  console.log( 'Is the', nameOfCar , 'parked in the garage?' );
  return false;
} // end isParkedHere

console.log( isParkedHere( 'Ford Explorer' ) );
console.log( isParkedHere( 'Nisson GTR' ) );
console.log( isParkedHere( 'Chevy Cruise' ) );
console.log( isParkedHere( 'Audi RS 5 Sportback' ) );
console.log( isParkedHere( 'Toyota Highlander' ) );
console.log( isParkedHere( 'Jeep Wrangler' ) );



// takeForASpin function
//---------------------


function takeForASpin( nameOfCar ){
  console.log( 'in takeForASpin' );
  if( isParkedHere( nameOfCar ) ){
    parkedCars.splice( (parkedCars.indexOf( nameOfCar ) ), 1 );
    console.log( 'Is', nameOfCar, 'ready to be taken out for a spin?' );
    return true;
  } // end if
  console.log( 'Is', nameOfCar, 'ready to be taken out for a spin?' );
  return false;
} // takeForSpin

console.log( takeForASpin( 'Ford Explorer' ) );
console.log( takeForASpin( 'Nisson GTR' ) );
console.log( takeForASpin( 'Chevy Cruise' ) );
console.log( takeForASpin( 'Audi RS 5 Sportback' ) );
console.log( takeForASpin( 'Toyota Highlander' ) );
console.log( takeForASpin( 'Jeep Wrangler' ) );
