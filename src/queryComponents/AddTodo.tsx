import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../queries/addTodo';
import { GET_TODOS } from '../queries/getTodos';
import Button from '../components/Button/Button';
import CustomInput from '../components/CustomInput/CustomInput';

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
        <CustomInput
          noRightBorder
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          placeholder="Task to do"
        />
        <Button type="submit" filled>Add</Button>
      </form>
      <div className="mb-16" />
      {loading && <span>Submitting...</span>}
      {error && <span>Submission error! {error.message}</span>}
    </div>
  );
};

export default AddTodo;
