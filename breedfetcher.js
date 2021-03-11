const request = require('request');

const fetchBreedDescription = (searchTerm, callback) => {
  if (!searchTerm) {
    callback("No search term given. Try again!", null);
    return;
  }
  request.get("https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const results = JSON.parse(body);
      if (!results.length) {
        callback("Error: No results for that search term.", null);
      } else {
        callback(null, results);
      }
    }
  });
};

module.exports = fetchBreedDescription;