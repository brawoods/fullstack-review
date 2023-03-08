import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);
    // invoke clientGet helper function, pass through term

    axios.post('/repos', {
      username: term
    })    // get repos
    .then((res) => {
      console.log(res.data); // test response
      return axios.get('/repos')
    })
    .then((res) => {
      // update state
      setRepos(res.data);
      console.log(repos);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));