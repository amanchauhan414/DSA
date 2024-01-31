import React, { useState, useEffect } from 'react';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import api from './api';
import './tailwind.css'; 


const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch initial questions when the component mounts
    fetchQuestions();
  }, []); // Empty dependency array means this effect runs once

  const fetchQuestions = async () => {
    try {
      const response = await api.get('/api/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleQuestionSubmit = () => {
    // Fetch questions again after a new question is submitted
    fetchQuestions();
  };

  return (
    <div>
      <h1>Question Tracker App</h1>
      <QuestionForm onQuestionSubmit={handleQuestionSubmit} questions={questions} setQuestions={setQuestions} />
      <QuestionList questions={questions} />
     
    </div>
  );
};

export default App;
