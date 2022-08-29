import { useQuery } from "@tanstack/react-query";
import { FURNITURE_BY_SLUG, FURNITURIES, GIFTS, GIFT_BY_SLUG } from "../graphql/query/ecommerceV2.query";
import { SITEV2 } from "../graphql/query/siteV2.query";
import { Product } from "../interfaces";
import { ProductV2 } from "../interfaces/ecommerceV2";
import { graphQLClientP, graphQLClientS } from "./graphQLClient";
import { SiteV2 } from '../interfaces/siteV2';

export function useGetSite(_id: string) {
  return useQuery<SiteV2>(["get-site", _id], async () => {
    const { siteV2 } = await graphQLClientS.request(
      SITEV2,
      { _id }
    );
    return siteV2;
  });
}
export function useGetProductsFurniture(site: string) {
  return useQuery<ProductV2[]>(["get-products-furniture", site], async () => {
    const { furnitures } = await graphQLClientP.request(
      FURNITURIES,
      { site }
    );
    return furnitures;
  });
}
export function useGetProductsGift(site: string) {
  return useQuery<ProductV2[]>(["get-products-gift", site], async () => {
    const { gifts } = await graphQLClientP.request(
      GIFTS,
      { site }
    );
    return gifts;
  });
}
export function useGetProductFurnitureBySlug(slug: string) {
  return useQuery<ProductV2>(["get-product-furniture-by-slug", slug], async () => {
    const { furnitureBySlug } = await graphQLClientP.request(
      FURNITURE_BY_SLUG,
      { slug }
    );
    return furnitureBySlug;
  });
}
export function useGetProductGiftBySlug(slug: string) {
  return useQuery<ProductV2>(["get-product-gift-by-slug", slug], async () => {
    const { giftBySlug } = await graphQLClientP.request(
      GIFT_BY_SLUG,
      { slug }
    );
    return giftBySlug;
  });
}

export const getSite =  async (_id: string) => {
  const { siteV2 } = await graphQLClientS.request(
    SITEV2,
    { _id }
  );
  return siteV2;
}