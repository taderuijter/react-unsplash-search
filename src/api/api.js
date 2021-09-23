// Import Axios from node modules
import axios from 'axios';

// Axios Config for API request
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID OwOzO9jzOTE0AH1KlE0r5Npy4VlEey9TetWOU0AN33g',
  },
});
