import React, { Component } from 'react';
import youtube from '../api/youtube';

class SearchBar extends Component {
  state = { term: ' ' };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  OnFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.OnFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
