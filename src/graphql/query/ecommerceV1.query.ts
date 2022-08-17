import { gql } from "graphql-request";

export const ALL_WEARS = gql`
  query AllWears {
    allWears{
      _id
			article{
        title
        slug
      }
    }
  }
`;
export const WEARS = gql`
  query Wears($site:String!) {
    wears(site:$site) {
      _id
			article{
        title
        slug
      }
    }
  }
`;
export const WEAR = gql`
  query Wear($_id:ID!) {
    wear(_id:$_id) {
      _id
			article{
        title
        slug
        description
        price
        discountPrice
        image{
          src
          alt
        }
      }
    }
  }
`;

export const ALL_FURNITURIES = gql`
  query AllFurnitures {
    allFurnitures{
      _id
			article{
        title
        slug
      }
    }
  }
`;
export const FURNITURIES = gql`
  query Furnitures($site:String!) {
    furnitures(site:$site) {
      _id
			article{
        title
        slug
        price
        route
        image{
          src
          alt
        }
      }
    }
  }
`;
export const FURNITURIE = gql`
  query Furniture($_id:ID!) {
    furniture(_id:$_id) {
      _id
			article{
        title
        slug
        description
        price
        discountPrice
        image{
          src
          alt
        }
        route
      }
    }
  }
`;