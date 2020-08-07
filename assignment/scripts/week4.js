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



// takeForSpin function
//---------------------

//console.log( 'in takeForSpin' );

//function takeForSpin( nameOfCar ){
//  for( let i=0; i<maxCars; i++ ){
//    console.log( 'Is', nameOfCar, 'ready to be taken out for a spin?' );
//    if( nameOfCar === parkedCars[ i ] && nameOfCar === isParkedHere ){
//      return true;
//  } // end for
//  splice here
//  return false;
//} // takeForSpin

//console.log( takeForSpin( 'Ford Explorer' ) );
//console.log( takeForSpin( 'Nisson GTR' ) );
//console.log( takeForSpin( 'Chevy Cruise' ) );
//console.log( takeForSpin( 'Audi RS 5 Sportback' ) );
//console.log( takeForSpin( 'Toyota Highlander' ) );
//console.log( takeForSpin( 'Jeep Wrangler' ) );
