import { gql } from '@apollo/client';

export const LOCATION_FIELD = gql`
  fragment LocationField on Location {
    id
    name
    type
    dimension
  }`;
