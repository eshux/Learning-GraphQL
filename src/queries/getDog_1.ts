import { gql } from '@apollo/client';

export const GET_DOG_1 = gql`
  query GetDog1($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
