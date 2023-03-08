const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  console.log('getRepo was touched: ');

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };


  // request(options, function(err, res) {
  //   body = JSON.parse(res.body);
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     cb(body);
  //   }
  // })

  // axios get
  axios.get(options.url, options.headers)
  .then((res) => {

    cb(JSON.parse(res.body));
  })
  .catch((err) => {
    cb(err);
  })
  .finally(() => {});
}

module.exports = getReposByUsername;