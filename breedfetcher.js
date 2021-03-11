const request = require('request');

const fetchBreedDescription = (searchTerm, callback) => {
  if (!searchTerm) {
    console.log("No search term given. Try again!");
    return;
  }
  
  request.get("https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm, (err, response, body) => {
    if (err) {
      callback(err, null);
    }
    const results = JSON.parse(body);
    if (!results.length) {
      callback("Error: Breed not found.", null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = fetchBreedDescription;