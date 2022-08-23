import { useRouter } from 'next/router';
import { FC } from "react"
import { Page404 } from '../components/404';
import useSWR from 'swr';
import { SITES } from '../graphql';
import { Site } from '../interfaces/siteV1';
import { Children0 } from './children0';
import { childrens0, childrens1, childrens2, childrenPaths0, childrenPaths1, childrenPaths2, seo, children0, paths, productPaths, productDashboardPaths, routes} from '../utils/functionV1';
import { Children1 } from './children1';
import { Children2 } from './children2';
import { Wear } from '../interfaces/ecommerceV1';
import { ProductOverviewFurniture } from '../components/productOverviewFurniture';
import { ChildrenPage } from '../components/childrenPage';
import { ChildrenPageDashboard } from '../components/childrenPageDashboard';
import { ProductPageDashboard } from '../components/productPageDashboard';
import { ProductOverviewDashboard } from '../components/productOverviewDashboard';

interface Routes {
  site: Site
  products: {
    furnitures: Wear[]
    gifts: Wear[]
  }
}
export const Routes: FC<Routes> = ({ site, products }) => {
  // console.log(products);
  
  const { asPath, query } = useRouter()
  const { data, isValidating, error } = useSWR(SITES)
  // console.log(productPaths(products.gifts));
  
  // console.log(productPaths(products.furnitures));
  
  switch (asPath) {
    case childrenPaths0(site).find(data => data === asPath):
      return <Children0 site={site}/>
    case childrenPaths1(site).find(data => data === asPath):
      return <Children1 site={site}/>
    case childrenPaths2(site).find(data => data === asPath):
      return <Children2 site={site} products={products}/>
    case productPaths(products.furnitures).find(data => data === asPath):
      return <ProductOverviewFurniture products={products.furnitures}/>
    case productPaths(products.gifts).find(data => data === asPath):
      return <ProductOverviewFurniture products={products.gifts}/>
    case '/dashboard/pages':
      return <ChildrenPageDashboard item={site.children} />
    case '/dashboard/products':
      return <ProductPageDashboard products={products.furnitures} site={site}/>
    case productDashboardPaths('furniture', products.furnitures).find(data => data === asPath):
      // return <h1>Hola</h1>
      return <ProductOverviewDashboard products={products.furnitures} site={site}/>

    default:
      return <Page404 />

  }
}