import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import { youtube_api_key as API_KEY } from './config.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
