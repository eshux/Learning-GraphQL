import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { CharType } from '../types/Chars';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import { GET_CHARS } from '../queries/getChars';

// If pages is not present on the Schema, we can always use *first* and *after*
// arguments in queries, similar as here

const GetAllCharacters: FC = () => {
  const { loading, error, data, fetchMore } = useQuery<CharType>(GET_CHARS, {
    variables: {
      page: 1,
    },
    // notifyOnNetworkStatusChange: true
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const update = (page: 'next' | 'prev') => {
    fetchMore({
      variables: {
        page: data?.characters.info[page]
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        const newData = fetchMoreResult.characters;
        return {
          ...previousResult,
          characters: newData
        };
      }
    });
  };

  return (
    <div className="flex flex-column">
      <div className="flex-justify-center flex-wrap">
        {data?.characters.results.map((char) => (
          <Card key={char.id} image={char.image} alt={char.name} size="xs">
            <div style={{ textAlign: 'center' }}>{char.name}</div>
          </Card>
        ))}
      </div>
      <div className="flex-justify-center">
        {data?.characters.info.prev && (
          <div className="mr-8">
            <Button onClick={() => update('prev')}>
              PREV
            </Button>
          </div>
        )}
        {data?.characters.info.next && (
        <Button onClick={() => update('next')}>
          NEXT
        </Button>
        )}
      </div>
    </div>
  );
};

export default GetAllCharacters;
