import { gql } from "graphql-request";

export const DATA_FRAGMENT = gql`
  fragment data on DataV2 {
    name
    description
  }
`;
export const SEO_FRAGMENT = gql`
  fragment seo on SeoV2 {
    name
    href
    description
    image {
      src
      alt
    }
  }
`;
export const CHILDREN_FRAGMENT = gql`
  fragment children on ChildrenV2 {
    slug
    type
    seo {
      ...seo
    }
  }
  ${SEO_FRAGMENT}
`;


export const SITEV2 = gql`
  query SiteV2($_id: ID!) {
    siteV2(_id: $_id) {
      data{
        name
      }
      dataBase{
        name
        type
      }
      children {
        ...children
        children {
          ...children
          children {
            ...children
          }
        }
      }
    }
  }
  ${CHILDREN_FRAGMENT}
`;

export const CHILDRENS_0 = gql`
  query Childrens0($_id:ID!) {
    childrens0(_id:$_id) {
			...children
    }
  }
  ${CHILDREN_FRAGMENT}
`;