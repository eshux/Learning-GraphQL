import { gql } from '@apollo/client';

export const GET_DOG_2 = gql`
  query GetDog2($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
