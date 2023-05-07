const express = require('express');
const app = express();
const gplay = require('google-play-scraper');
const APP_ID = 'com.OmarDiaa.ChemistrySchool'

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, async function () {
  reviews = await get_reviews();
  console.log(reviews)
  console.log('Server listening on port 3000!');
});

async function get_reviews() {
  const reviews = await gplay.reviews({
    appId: APP_ID,
    sort: gplay.sort.RATING,
    num: 3000
  })
  return reviews
}
