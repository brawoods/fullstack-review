const express = require('express');
const {Repo, save} = require('../database');
const getReposByUsername = require('../helpers/github');
let app = express();

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.use(express.static(/* add dirname*/ `client/dist`)) //

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  // ingest HTTP POST request from client
  // GET from GitHub API (see helpers/github.js)
  getReposByUsername(req.body.username, (repos) => {
    // invoke model (save) on array of repos from API
    save(repos)
    .then(() => res.status(201).send())
    // respond to client (201)
  })



});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  // ingest client HTTP request
  // on request invoke Repo.query
  // provided req.body
  Repo.find({})
    .sort('-stargazers_count')
    .limit(25)
    .exec()
    .then((data)=> {
      res.send(data);
    })

  // res.send('you have reached server app.get ');


});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

