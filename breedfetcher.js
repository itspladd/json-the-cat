const request = require('request');
const breedSearchTerm = process.argv[2];

const fetchBreedDescription = (searchTerm, callback) => {
  if (!searchTerm) {
    console.log("No search term given. Try again!");
    return;
  }
  
  request.get("https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm, (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    const results = JSON.parse(body);
    if (!results.length) {
      console.log("Error: Breed not found.");
    } else {
      console.log("Breed search results:");
      results.forEach(element => {
        console.log(`${element.name}: ${element.description}`);
        console.log(`******************************`);
      });
    }
  });
}
console.log("import/export worked")

module.exports = fetchBreedDescription;