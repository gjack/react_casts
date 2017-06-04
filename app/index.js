const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
import { youtube_api_key as API_KEY } from './config.js';
import SearchBar from './components/search_bar.js';

class App extends React.Component {
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
