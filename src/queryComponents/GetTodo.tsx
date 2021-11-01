import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../queries/getTodos';
import { TodoType } from '../types/Todos';

const GetTodo: FC = () => {
  const { loading, error, data } = useQuery<TodoType>(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data && data.todos.map((item) => (
        <div key={item.id}>
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default GetTodo;
