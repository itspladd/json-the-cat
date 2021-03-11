const request = require('request');

request.get("https://api.thecatapi.com/v1/breeds/search?q=sib", (err, response, body) => {
  console.log(err);
  console.log(response);
  console.log(body);
})