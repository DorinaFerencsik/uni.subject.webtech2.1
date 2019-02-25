//feladat
//garázst akarunk csinálni ami tudja hogy egy autónak van rendszáma, amit ellenőrizni szeretnénk

//  auto - object (constructor, plate number (regex), color)   ---- külön file

//ParkingLot                        ---- külön file
    //object, constructor, levels, slot
    //parkCar(): level/slot
    //getSlot(): empty / Car / undefined

const Car = require('./Car.js');
const ParkingLot = require('./ParkingLot');

try {
    var c1 = new Car.Car('ABC-123', 'black');
    var c2 = new Car.Car('DFE-456', 'white');
    var c3 = new Car.Car('DFE-457', 'red');
    // console.log(c1);
    // console.log(c2);

    var parking = new ParkingLot.ParkingLot([1,1]);
    //console.log(parking.getSlot(1,1));
    parking.parkCar(c1);
    console.log(parking.getSlot(0,0));
    parking.parkCar(c2);
    parking.parkCar(c3);

    // console.log(parking);
}catch (e) {
    console.error(e);
}


