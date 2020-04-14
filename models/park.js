const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
   if (index > -1) {
     this.dinosaurs.splice(index, 1);
   };
};

Park.prototype.findPopularDinosaur = function() {
  let numberOfVisitors = 0;
  let results;
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.guestsAttractedPerDay > numberOfVisitors) {
      numberOfVisitors = dinosaur.guestsAttractedPerDay;
      results = dinosaur.species;
    }
  };
  return results;
};

Park.prototype.findSpeciesAmount = function(species) {
  let resultArray = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      resultArray.push(dinosaur);
    };
  };
  return resultArray;
}

Park.prototype.visitorsPerDay = function() {
  let numberOfVisitors = 0;
  for (dinosaur of this.dinosaurs) {
    numberOfVisitors += dinosaur.guestsAttractedPerDay;
  };
  return numberOfVisitors;
};

Park.prototype.visitorsPerYear = function() {
  numberOfVisitors = (this.visitorsPerDay() * 365);
  return numberOfVisitors;
}

Park.prototype.yearlyRevenue = function() {
  yearlyRevenue = (this.ticketPrice * 365);
  return yearlyRevenue;
}

Park.prototype.removeDinosaurSpecies = function(species) {
  let array = this.findSpeciesAmount(species);
    for (dinosaur of array) {
    this.removeDinosaur(dinosaur)
  };
  return this.dinosaurs;
}

Park.prototype.dinoDiets = function() {
  let carnivore = [];
  let herbivore = [];
    for (dinosaur of this.dinosaurs) {
      if (dinosaur.diet === 'carnivore')
        carnivore.push(dinosaur);
      else
        herbivore.push(dinosaur);
    }
  return `carnivore: ${carnivore.length}, herbivore: ${herbivore.length}`;
};

module.exports = Park;
