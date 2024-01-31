import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust this URL to match your backend server endpoint
});

// Fetch questions from the backend
export const getQuestions = async () => {
  try {
    const response = await instance.get('/api/questions');
    return response.data;
  } catch (error) {
    // Log or handle errors appropriately
    console.error('Error fetching questions:', error);
    throw error; // Propagate the error to the caller
  }
};

// Add a new question to the backend
export const addQuestion = async (questionData) => {
  try {
    const response = await instance.post('/api/questions', questionData);
    return response.data;
  } catch (error) {
    // Log or handle errors appropriately
    console.error('Error adding question:', error);
    throw error; // Propagate the error to the caller
  }
};

export default instance;
