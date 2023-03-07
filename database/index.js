const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  "id": Number,
  "name": String,
  "full_name": String,
  "html_url": String,
  "description": String,
  "url": String,
  "size": Number,
  "forks_count": Number,
  "open_issues_count": Number,
  "forks": Number,
  "open_issues": Number,
  "watchers": Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // connect to app.post call after API
  // create a new repo based on Repo model and API data
}

module.exports.save = save;
