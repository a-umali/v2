// src/fdaTobaccoService.js

import axios from 'axios';

const API_URL = 'https://api.fda.gov/tobacco/problem.json?count=date_submitted';

const fetchTobaccoData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.results; // Adjust based on the actual structure of the API response
  } catch (error) {
    console.error('Error fetching tobacco data:', error);
    throw error;
  }
};

export default fetchTobaccoData;
