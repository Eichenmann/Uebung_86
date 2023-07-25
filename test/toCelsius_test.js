const { expect } = require('chai');
const { cToF, fToC } = require('../app.js');

// positive Zahlen
describe('positive Zahlen', function() {
  describe('cToF', function() {
    it("sollte Celsius nach Fahrenheit umwandeln", () => {
      let celsius = 25;
      let expectedfahrenheit = 77;
      let actualfahrenheit = cToF(celsius);
      expect(actualfahrenheit).to.equal(expectedfahrenheit);
    });
  });

  describe('fToC', function() {
    it("sollte Fahrenheit nach Celsius umwandeln", () => {
      let fahrenheit = 86;
      let expectedcelsius = 30;
      let actualcelsius = fToC(fahrenheit);
      expect(actualcelsius).to.equal(expectedcelsius);
    });
  });
});

// negative Zahlen
describe('negative Zahlen', function() {
  describe('cToF', function() {
    it("sollte negative Celsius nach Fahrenheit umwandeln", () => {
      let celsius = -10;
      let expectedfahrenheit = 14;
      let actualfahrenheit = cToF(celsius);
      expect(actualfahrenheit).to.equal(expectedfahrenheit);
    });
  });

  describe('fToC', function() {
    it("sollte negative Fahrenheit nach Celsius umwandeln", () => {
      let fahrenheit = -22;
      let expectedcelsius = -30;
      let actualcelsius = fToC(fahrenheit);
      expect(actualcelsius).to.equal(expectedcelsius);
    });
  });
});

// Null
describe('Null', function() {
  describe('cToF', function() {
    it("sollte 0 Grad Celsius nach Fahrenheit umwandeln", () => {
      let celsius = 0;
      let expectedfahrenheit = 32;
      let actualfahrenheit = cToF(celsius);
      expect(actualfahrenheit).to.equal(expectedfahrenheit);
    });
  });

  describe('fToC', function() {
    it("sollte 0 Fahrenheit nach Celsius umwandeln", () => {
      let fahrenheit = 32;
      let expectedcelsius = 0;
      let actualcelsius = fToC(fahrenheit);
      expect(actualcelsius).to.equal(expectedcelsius);
    });
  });
});