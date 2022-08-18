import { useRouter } from "next/router";
import { FC } from "react"
import { Site } from "../interfaces/siteV1";
import { Hero } from "../components/hero";
import { ChildrenPage } from '../components/childrenPage';
import { children0, childrenPaths1, children1, children2, childrenPaths2 } from '../utils/functionV1';
import { ProductPageFurniture } from "../components/productPageFurniture";
import useSWR from "swr";
import { FURNITURIES } from "../graphql/query/ecommerceV1.query";
import { ProductPageGift } from "../components/productPageGift";
import { Wear } from "../interfaces/ecommerceV1";

interface Props {
  site: Site
  products: {
    furnitures: Wear[]
    gifts: Wear[]
  }
}

export const Children2: FC<Props> = ({ site, products }) => {
  const { asPath, query } = useRouter()
  // console.log(query.slug);
  
  // console.log(children2(site, query));
  
  switch (asPath) {
    case childrenPaths2(site).find(data => data === asPath):
      if (children2(site, query)!.type === 'products-furniture') {
        return <ProductPageFurniture item={children2(site, query)!} products={products.furnitures}/>
      } else if (children2(site, query)!.type === 'products-gift') {
        return <ProductPageGift item={children2(site, query)!} products={products.gifts}/>
      }
      
    // case getPathsC0(sites, asPath):
    //   return (
    //     <>
    //       <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    //         {children0.body.title}
    //       </ReactMarkdown>
    //     </>
    //   )
    default:
      return null;
  }
}
