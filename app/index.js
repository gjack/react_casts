import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import { youtube_api_key as API_KEY } from './config.js';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetails from './components/video_details.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <div className="row">
          <VideoDetails video={this.state.selectedVideo}/>
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
