//ParkingLot                        ---- külön file
//object, constructor,
    // levels
    // slot
//parkCar(): level/slot
//getSlot(): empty / Car / undefined


module.exports = {
    Level : function (slots) {
        this.slots = [];
        for (var i = 0; i < slots; i++){
            this.slots.push("empty");
        }
    },
    ParkingLot : function (slotsPerLevels) {
        //minden szinthez külön string tömb (index a hely száma, érték hogy empty/Car, + ha index out of bound akkor nincs olyan hely)
        this.levels = {};
        for(var i = 0; i<slotsPerLevels.length; i++){
            var slots = [];
            for (var j = 0; j < slotsPerLevels[i]; j++){
                slots.push("empty");
            }
            this.levels[""+i] = slots;
                //new module.exports.Level(slotsPerLevels[i]);
        }
        this.getSlot = function (level, slot) {
            return this.levels[level][slot];
        };
        this.parkCar = function (car) {
            var slotFound = false;
            var i = 0;
            var j = 0;
            //FIXME
            // console.log(Object.keys(this.levels).length);
            while (!slotFound && i<Object.keys(this.levels).length && j < this.levels[i].length){
                if (this.levels[i][j] == 'empty') {
                    this.levels[i][j] = car;
                    slotFound = true;
                    console.log("Car parked to level "+i+" slot "+j);
                }
                console.log("i: "+i+" j: "+j);
                i = (i<Object.keys(this.levels).length) ? i+1 : i;
                j = (j<this.levels[i].length)? j+1 : j;
            }
            if (!slotFound) {
                throw "There are not empty parking slots";
            }
        };
    }

};