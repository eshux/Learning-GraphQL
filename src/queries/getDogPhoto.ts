import { gql } from '@apollo/client';

export const GET_DOG_PHOTO = gql`
  query GetDogPhoto($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
