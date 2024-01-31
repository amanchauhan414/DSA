import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const QuestionForm = ({ onQuestionSubmit }) => {
  const { register, handleSubmit, setValue, control } = useForm();

  const onSubmit = async (data) => {
    // Assuming you have an API endpoint for adding questions
    const response = await axios.post('http://localhost:5000/api/questions', data);
    if (response.data.success) {
      // Reset form after successful submission
      setValue('questionDetail', '');
      setValue('attemptedDate', null);
      onQuestionSubmit(); // Trigger a refresh of the question list
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Question Detail:
        <input type="text" {...register('questionDetail', { required: true })} />
      </label>
      <label>
        Attempted Date:
        <Controller
          control={control}
          name="attemptedDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => setValue('attemptedDate', date)}
            />
          )}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
