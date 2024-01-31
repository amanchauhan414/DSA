import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <strong>{question.questionDetail}</strong> - {question.attemptedDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
