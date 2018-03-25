import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyBG-UhTwvJozubvOvWhbXAbybDs0dYlUVw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kurzgesagt');
  }

  videoSearch(input) {
    YTSearch({ key: API_KEY, term: input }, data => {
      // console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={input => this.videoSearch(input)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={element => this.setState({ selectedVideo: element })}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
