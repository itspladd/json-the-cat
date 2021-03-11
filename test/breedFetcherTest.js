const assert = require('chai').assert;
const fetchBreedDescription = require('../breedfetcher');


describe('#fetchBreedDescription', () => {
  it(`shoud return a single-item array with breed results for a valid breed, via a callback`, (done) => {
    fetchBreedDescription('Siberian', (err, results) => {
      assert.isNull(err);

      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(results.length, 1);
      assert.equal(results[0].description, expected);

      done();
    });
  });
  it(`shoud return an error and null results for no search results`, (done) => {
    fetchBreedDescription('Shih Tzu', (err, results) => {
      assert.isNull(results);
      
      const expected = "Error: No results for that search term.";
      assert.equal(err, expected);

      done();
    });
  });
});