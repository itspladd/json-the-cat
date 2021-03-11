const request = require('request');
const breedSearchTerm = process.argv[2];

if (!breedSearchTerm) {
  console.log("No search term given. Try again!");
  return;
}

request.get("https://api.thecatapi.com/v1/breeds/search?q=" + breedSearchTerm, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const results = JSON.parse(body);
  if (!results.length) {
    console.log("Error: Breed not found.");
  } else {
    console.log(results);
  }    
})