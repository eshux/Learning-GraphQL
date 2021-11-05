import { gql } from '@apollo/client';

export const GET_CHARS = gql`
  query GetChars($page: Int) {
    characters(page: $page){
      info {
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;
