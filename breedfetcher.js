const request = require('request');
const breedSearchTerm = process.argv[2];

request.get("https://api.thecatapi.com/v1/breeds/search?q=" + breedSearchTerm, (err, response, body) => {
  console.log(err);
  console.log(response);
  console.log(JSON.parse(body)[0].description);
})