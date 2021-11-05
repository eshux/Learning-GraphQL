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
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex flex-column">
      <div className="flex-justify-center flex-wrap">
        {data?.characters.results.map((char) => (
          <Card key={char.id} image={char.image} alt={char.name} size="xs">
            <div style={{ textAlign: 'center' }}>{char.name}</div>
          </Card>
        ))}
      </div>
      {data?.characters.info.next
      && (
      <Button
        onClick={() => fetchMore({
          variables: {
            page: data?.characters.info.next
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            const newNodes = fetchMoreResult.characters.results;
            const infoData = fetchMoreResult.characters.info;
            return {
              ...previousResult,
              characters: {
                results: [...previousResult.characters.results, ...newNodes],
                info: infoData
              }
            };
          }
        })}
      >
        LOAD MORE
      </Button>
      )}
    </div>
  );
};

export default GetAllCharacters;
