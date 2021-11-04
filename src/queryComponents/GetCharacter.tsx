import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../queries/getCharacter';
import { CharType } from '../types/Chars';
import Card from '../components/Card/Card';
import Button from '../components/Button/Button';
import Modal from '../components/LocationModal/LocationModal';

const GetCharacter: FC = () => {
  const { loading, error, data } = useQuery<CharType>(GET_CHARACTER, {
    variables: { id: 1 }
  });
  const [modal, setModal] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
        {data && (
          <Card key={data.character.id} image={data.character.image} alt={data.character.name}>
            <p>Name: {data.character.name}</p>
            <Button
              onClick={() => {
                setModal(true);
              }}
              fullWidth
            >
              Check location
            </Button>
          </Card>
        )}
      </div>
      { modal && data && (
        <Modal
          onClose={() => setModal(false)}
          location={data.character.location}
        />
      )}
    </>
  );
};

export default GetCharacter;
