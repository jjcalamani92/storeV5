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