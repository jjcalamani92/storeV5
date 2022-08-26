import { FC } from "react"
import { useRouter } from 'next/router';
import { Site } from '../interfaces/siteV1';
import { Children0, Children1, Children2 } from './';
import { childrens0, childrens1, childrens2, childrenPaths0, childrenPaths1, childrenPaths2, seo, children0, paths, productPaths, productDashboardPaths, routes} from '../utils/functionV1';
import { Product } from '../interfaces/ecommerceV1';
import { ProductPageSWR, ProductOverview, ProductDashboard, ChildrenPageDashboard, Page404} from '../components';
import { getQuery } from "../utils/function";

interface Routes {
  site: Site
  products: {
    furnitures: Product[]
    gifts: Product[]
  }
}
export const Routes: FC<Routes> = ({ site, products }) => {
  
  const { asPath, query } = useRouter()
  console.log(getQuery(asPath));
  
  console.log(productPaths(products.furnitures).includes(asPath))
  
  switch (asPath) {
    case childrenPaths0(site).find(data => data === asPath):
      return <Children0 site={site}/>
    case childrenPaths1(site).find(data => data === asPath):
      return <Children1 site={site}/>
    case childrenPaths2(site).find(data => data === asPath):
      return <Children2 site={site} products={products}/>
    case productPaths(products.furnitures).find(data => data === asPath):
      return <ProductOverview products={products.furnitures} site={site}/>
    case productPaths(products.gifts).find(data => data === asPath):
      return <ProductOverview products={products.gifts} site={site}/>
    case '/dashboard/pages':
      return <ChildrenPageDashboard item={site.children} site={site}/>
    case '/dashboard/products':
      return <ProductDashboard  site={site}/>
    case '/dashboard/products/furniture':
      return <ProductPageSWR products={products.furnitures} site={site}/>
    case '/dashboard/products/gift':
      return <ProductPageSWR products={products.gifts} site={site}/>
    case productDashboardPaths('furniture', products.furnitures).find(data => data === asPath):
      return <ProductOverview products={products.furnitures} site={site}/>
    case productDashboardPaths('gift', products.gifts).find(data => data === asPath):
      return <ProductOverview products={products.gifts} site={site}/>

    default:
      return <Page404 />

  }
}