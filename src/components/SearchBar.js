import React from 'react';

class SearchBar extends React.Component {
  
  // Initialize term state
  state = { term: '' };

  // Prevents form to do default page refresh on enter
  // Adds search term to state
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  // Component Render
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={ {margin: '0 0 10px 15px'} }>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Search for Images"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
