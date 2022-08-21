import { gql } from "graphql-request";

export const CREATE_WEAR_PRODUCT = gql`
  mutation CreateWear($input: CreateProductInput!) {
    createWear(input: $input) {
      _id
      site
    }
  }
`;
export const CREATE_FURNITURE_PRODUCT = gql`
  mutation CreateFurniture($input: CreateProductInput!) {
    createFurniture(input: $input) {
      _id
      site
    }
  }
`;

export const ADD_IMAGES_PRODUCT = gql`
mutation AddImagesFurniture($_id: ID!, $input: [AddImagesInput!]!) {
  addImagesFurniture(_id: $_id, input: $input) {
    _id
  }
}
`;