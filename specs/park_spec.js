const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic', 10)
    dinosaurOne = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaurTwo = new Dinosaur('Triceratops', 'herbivore', 30);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaurOne)
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaurOne)
    park.removeDinosaur(dinosaurOne)
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.findPopularDinosaur();
    assert.deepStrictEqual(actual, 'T-Rex');
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.findSpeciesAmount('T-Rex');
    assert.deepStrictEqual(actual, [dinosaurOne, dinosaurOne]);

  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 29200);
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.yearlyRevenue()
    assert.strictEqual(actual, 3650);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.removeDinosaurSpecies('T-Rex');
    assert.deepStrictEqual(actual, [dinosaurTwo]);
  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function() {
    park.addDinosaur(dinosaurOne);
    park.addDinosaur(dinosaurTwo);
    const actual = park.dinoDiets();
    assert.deepStrictEqual(actual, 'carnivore: 1, herbivore: 1');
  });

});
