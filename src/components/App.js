import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube, { KEY } from '../api/youtube';

class App extends Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
