import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../queries/addTodo';
import { GET_TODOS } from '../queries/getTodos';

type VarType = {
  variables: {
    type: string,
    another?: string
  }
}

const AddTodo: FC = () => {
  const [addTodo, { loading, error }] = useMutation<VarType>(ADD_TODO, {
    variables: {
      type: 'default', // will be overwritten if we pass another one in the addTodo function
      another: 'default' // values that we don't overwrite will be present
    },
    refetchQueries: [
      GET_TODOS, // DocumentNode object parsed with gql
      'GetTodos' // Query name
    ]
  });
  const [inputValue, setInputValue] = useState('');

  if (loading) return <span>Submitting...</span>;
  if (error) return <span>Submission error! {error.message}</span>;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue) {
            addTodo({ variables: { type: inputValue } });
            setInputValue('');
          }
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Task to do"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
