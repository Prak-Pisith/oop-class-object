class BaseAnimal {
  private name: string | undefined;
  private species: string | undefined;

  constructor (name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound(): void {
    console.log(`${this.name} the ${this.species} is making sound`)
  }
}

// Objects

const leo = new BaseAnimal('Leo', 'Lion');
leo.makeSound();

const ming = new BaseAnimal('Ming', 'Elephant');
ming.makeSound();