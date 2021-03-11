const fetchBreedDescription = require('./breedfetcher');
const breedSearchTerm = process.argv[2];

fetchBreedDescription(breedSearchTerm, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    results.forEach(element => {
      console.log(`${element.name}: ${element.description}`);
      console.log(`******************************`);
    });
  }
});