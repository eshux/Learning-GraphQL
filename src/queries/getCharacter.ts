import { gql } from '@apollo/client';
import { LOCATION_FIELD } from './loactionFragment';

export const GET_CHARACTER = gql`
  ${LOCATION_FIELD}
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      location {
        ...LocationField
      }
      image
    }
  }
`;
