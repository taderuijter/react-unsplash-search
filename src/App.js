// Base Imports
import React from 'react';
import api from './api/api';

// Components
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  
  // Initialize state for Unspash images
  state = { images: [] };

  // This function gets the term from SearchBar Component
  // Async Axios Get function for Unsplash Images
  onSearchSubmit = async (term) => {
    const response = await api.get('/search/photos', {
      params: { query: term }
    });

    // Set response to images state
    this.setState({ images: response.data.results });
  };

  // React render function
  render() {
    return (
      <div className="ui container" style={{ marginTop: '45px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;