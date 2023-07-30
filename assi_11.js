// const express = require('express');
// const request = require('request');
// const cheerio = require('cheerio');


// const app = express();
// const port = 3000;

// const cricketUrl = 'https://www.example-cricket-website.com/live-score'; // Replace with the actual cricket website URL

// app.get('/live-score', (req, res) => {
//   request(cricketUrl, (error, response, html) => {
//     if (!error && response.statusCode === 200) {
//       const $ = cheerio.load(html);

//       const teamA = $('div.teamA').text();
//       const teamB = $('div.teamB').text();
//       const score = $('div.score').text();

//       const liveScore = {
//         teamA,
//         teamB,
//         score,
//       };

//       res.json(liveScore);
//     } else {
//       res.status(500).send('Error fetching live score.');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Live cricket score app is running on http://localhost:${port}`);
// });



const express = require('express');
const axios = require('axios');


const app = express();
const port = 3000;


const apiKey = 'd4594015-7cc4-4cd1-9817-610c4768246e';


app.get('/live-score', (req, res) => {
  const cricapiUrl = `https://api.cricapi.com/v1/currentMatches?apikey=d4594015-7cc4-4cd1-9817-610c4768246e&offset=0`;


  axios.get(cricapiUrl)
    .then(response => {
      const liveMatches = response.data.matches.filter(match => match.matchStarted);
      const liveScores = liveMatches.map(match => {
        return {
          id: match.id,
          date: match.date,          
          score: match.score,
        };
      });


      res.json(liveScores);
    })
    .catch(error => {
      console.error('Error fetching live scores:', error.message);
      res.status(500).send('Error fetching live scores.');
    });
});


app.listen(port, () => {
  console.log(`Live cricket score app is running on http://localhost:${port}`);
});
