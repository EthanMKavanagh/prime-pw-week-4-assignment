console.log( 'js' );

let parkedCars = [];
const maxCars = 5;

function parkCar(){
  console.log( 'in parkCar' );
  if( maxCars >= parkedCars.length ){
    return true;
  }
  else{
    return false;
  }
}

function getInGarage( nameOfCar ){
  console.log( 'in getInGarage', nameOfCar );
  parkedCars.push( nameOfCar );
  return parkedCars;
}

getInGarage( 'Ford Explorer' );
getInGarage( 'Nisson GTR' );
getInGarage( 'Chevy Cruise' );
getInGarage( 'Audi RS 5 Sportback' );

console.log( parkCar() );
