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
  "id": {type: Number, unique: true},  // unique identifier
  "name": String,  // repo name
  "full_name": String,  // repo full name
  "html_url": String, // repo page address
  "description": String,  // what repo is about
  "url": String, // api address
  "stargazers_count": Number,
  "size": Number,
  "forks_count": Number,
  "open_issues_count": Number,
  "forks": Number,
  "open_issues": Number,
  "watchers": Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // connect to app.post call after API
  // create a new repo based on Repo model and API data

  return Repo.create(repos);
}

module.exports.save = save;
module.exports.Repo = Repo;
