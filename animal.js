var BaseAnimal = /** @class */ (function () {
    function BaseAnimal(name, species) {
        this.name = name;
        this.species = species;
    }
    BaseAnimal.prototype.makeSound = function () {
        console.log("".concat(this.name, " the ").concat(this.species, " is making sound"));
    };
    return BaseAnimal;
}());
// Objects
var leo = new BaseAnimal('Leo', 'Lion');
leo.makeSound();
var ming = new BaseAnimal('Ming', 'Elephant');
ming.makeSound();
