import { FC } from "react"
import { useRouter } from 'next/router';
import { Children0, Children1, Children2 } from './';
import { ProductPageDashboard, ProductOverview, ProductDashboard, ChildrenPageDashboard, Page404} from '../components';

import { childrenPaths0, childrenPaths1, childrenPaths2, productDashboardDataBasePaths, productDashboardPaths, productPaths, productsDashboardPaths, productsPaths } from "../utils/functionV2";
import { useGetProductsFurniture, useGetProductsGift, useGetProductsJeweler, useGetProductsTeddy, useGetSite } from "../react-query/reactQuery";
import { ProductOverviewDashboard } from "../components/productOverviewDashboard";

interface Routes {
}
export const Routes: FC<Routes> = ({  }) => {
  const { asPath, query } = useRouter()
  const { data: site } = useGetSite(process.env.API_SITE!);
  const { data: furnitures } = useGetProductsFurniture(process.env.API_SITE!);
  const { data: gifts  } = useGetProductsGift(process.env.API_SITE!);
  const { data: teddys  } = useGetProductsTeddy(process.env.API_SITE!);
  const { data: jewelers  } = useGetProductsJeweler(process.env.API_SITE!);

  // console.log(productPaths(furnitures!, 'furniture'));
  // console.log(productsPaths({furnitures, gifts, teddys, jewelers}, site!));
  console.log(productsPaths({furnitures, gifts, teddys, jewelers}, site!));
  console.log(productsDashboardPaths({furnitures, gifts, teddys, jewelers}, site!));
  
  switch (asPath) {
    case childrenPaths0(site!).find(data => data === asPath):
      return <Children0 site={site!}/>
    case childrenPaths1(site!).find(data => data === asPath):
      return <Children1 site={site!}/>
    case childrenPaths2(site!).find(data => data === asPath):
      return <Children2 site={site!} />
    case productsPaths({furnitures, gifts, teddys, jewelers}, site!).find(data => data === asPath):
      return <ProductOverview site={site!}/>
    // case productPaths(gifts!, 'gift').find(data => data === asPath):
    //   return <ProductOverview site={site!}/>
    // case productPaths(teddys!, 'teddy').find(data => data === asPath):
    //   return <ProductOverview site={site!}/>

    case '/dashboard/products':
      return <ProductDashboard  site={site!}/>
    case productDashboardDataBasePaths(site!).find(data => data === asPath):
      return <ProductPageDashboard site={site!}/>
    case productsDashboardPaths({furnitures, gifts, teddys, jewelers}, site!).find(data => data === asPath):
      return <ProductOverviewDashboard site={site!}/>
    // case productDashboardPaths('gift', products.gifts).find(data => data === asPath):
    //   return <ProductOverview products={products.gifts} site={site}/>

    default:
      return <Page404 />

  }
}