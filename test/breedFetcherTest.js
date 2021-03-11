const assert = require('chai').assert;
const fetchBreedDescription = require('../breedfetcher');


describe('#fetchBreedDescription', () => {
  it(`shoud return a single-item array with breed results for a valid breed, via a callback`, (done) => {
    fetchBreedDescription('Siberian', (err, results) => {
      assert.equal(err, null);

      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(desc.length, 1);
      assert.equal(desc[0].description, expected);

      done();
    });
  });
  it(`should...`);
  it(`should...`);
  it(`should...`);
});