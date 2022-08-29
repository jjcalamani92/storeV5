import { gql } from "graphql-request";

export const CREATE_WEAR_PRODUCT = gql`
  mutation CreateWear($input: CreateProductInput!) {
    createWear(input: $input) {
      _id
      site
    }
  }
`;
export const ADD_FURNITURE_PRODUCT = gql`
  mutation AddFurniture($input: CreateProductInput!) {
    addFurniture(input: $input) {
      _id
      site
    }
  }
`;
export const ADD_GIFT_PRODUCT = gql`
  mutation AddGift($input: CreateProductInput!) {
    addGift(input: $input) {
      _id
      site
    }
  }
`;
export const UPDATE_FURNITURE_PRODUCT = gql`
  mutation UpdateFurniture($_id: ID!, $input: UpdateProductInput!) {
    updateFurniture(_id: $_id, input: $input) {
      _id
      site
    }
  }
`;
export const UPDATE_GIFT_PRODUCT = gql`
  mutation UpdateGift($_id: ID!, $input: UpdateProductInput!) {
    updateGift(_id: $_id, input: $input) {
      _id
      site
    }
  }
`;
export const DELETE_FURNITURE_PRODUCT = gql`
  mutation RemoveFurniture($_id: ID!) {
    removeFurniture(_id: $_id) 
  }
`;
export const DELETE_GIFT_PRODUCT = gql`
  mutation RemoveGift($_id: ID!) {
    removeGift(_id: $_id) 
  }
`;

export const UPDATE_IMAGES_FURNITURE = gql`
mutation UpdateImagesFurniture($_id: ID!, $input: [UpdateImagesInput!]!) {
  updateImagesFurniture(_id: $_id, input: $input) {
    _id
  }
}
`;
export const UPDATE_IMAGES_GIFT = gql`
mutation UpdateImagesGift($_id: ID!, $input: [UpdateImagesInput!]!) {
  updateImagesGift(_id: $_id, input: $input) {
    _id
  }
}
`;