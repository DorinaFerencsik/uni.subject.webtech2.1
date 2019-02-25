//  auto - object (constructor, plate number (regex), color)   ---- külön file
const plateRegExp = new RegExp("[A-Z]{3}-[0-9]{3}", "i");
module.exports = {
    Car : function (plateNo, color) {
        if (!plateRegExp.test(plateNo)){
            throw "Plate is not in good format";
        }
        this.plateNo = plateNo;
        this.color = color;
    }

};