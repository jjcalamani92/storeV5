import { gql } from "graphql-request";

export const CREATE_WEAR_PRODUCT = gql`
  mutation CreateWear($input: CreateProductInput!) {
    createWear(input: $input) {
      _id
      site
    }
  }
`;