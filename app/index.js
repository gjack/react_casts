const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
import { youtube_api_key as API_KEY } from './config.js';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
