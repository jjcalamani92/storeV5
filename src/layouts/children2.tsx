import { useRouter } from "next/router";
import { FC } from "react"
import { Site } from "../interfaces/siteV1";
import { children0, childrenPaths1, children1, children2, childrenPaths2 } from '../utils/functionV1';
import { ProductPage } from "../components";
import { Product } from "../interfaces/ecommerceV1";

interface Props {
  site: Site
  products: {
    furnitures: Product[]
    gifts: Product[]
  }
}

export const Children2: FC<Props> = ({ site, products }) => {
  const { asPath, query } = useRouter()
  switch (asPath) {
    case childrenPaths2(site).find(data => data === asPath):
      if (children2(site, query)!.type === 'products-furniture') {
        return <ProductPage item={children2(site, query)!} products={products.furnitures}/>
      } else if (children2(site, query)!.type === 'products-gift') {
        return <ProductPage item={children2(site, query)!} products={products.gifts}/>
      }

    default:
      return null;
  }
}
