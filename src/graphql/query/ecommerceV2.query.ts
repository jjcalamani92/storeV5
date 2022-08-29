import { gql } from "graphql-request";

export const DETAIL_FRAGMENT = gql`
  fragment details on Detail {
    material
    color
    finishing
    logo
    accessories
    dimensions
  }
`;
export const SEO_FRAGMENT = gql`
  fragment seo on Seo {
    name
    href
    description
    image {
      src
      alt
    }
  }
`;
export const ARTICLE_FRAGMENT = gql`
  fragment article on Article {
    name
    slug
    mark
    inStock
    price
    discountPrice
    route
    description
  }
`;

export const FURNITURIES = gql`
  query Furnitures($site: String!) {
    furnitures(site: $site) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const GIFTS = gql`
  query Gifts($site: String!) {
    gifts(site: $site) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const TEDDYS = gql`
  query Teddys($site: String!) {
    teddys(site: $site) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const JEWELERS = gql`
  query Jewelers($site: String!) {
    jewelers(site: $site) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;

export const FURNITURE_BY_SLUG = gql`
  query FurnitureBySlug($slug: String!) {
    furnitureBySlug(slug: $slug) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const GIFT_BY_SLUG = gql`
  query GiftBySlug($slug: String!) {
    giftBySlug(slug: $slug) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const TEDDY_BY_SLUG = gql`
  query TeddyBySlug($slug: String!) {
    teddyBySlug(slug: $slug) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
export const JEWELER_BY_SLUG = gql`
  query JewelerBySlug($slug: String!) {
    jewelerBySlug(slug: $slug) {
      _id

      article {
        ...article
        featured {
          name
          href
        }
        seo {
          ...seo
        }
        image {
          src
          alt
        }
        details {
          ...details
        }
      }
    }
  }
  ${SEO_FRAGMENT}
  ${ARTICLE_FRAGMENT}
  ${DETAIL_FRAGMENT}
`;
