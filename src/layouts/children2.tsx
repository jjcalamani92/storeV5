import { useRouter } from "next/router";
import { FC } from "react"
import { Site } from "../interfaces/siteV1";
import { Hero } from "../components/hero";
import { ChildrenPage } from '../components/childrenPage';
import { children0, childrenPaths1, children1, children2, childrenPaths2 } from '../utils/functionV1';
import { ProductPage } from "../components/productPage";
import useSWR from "swr";
import { FURNITURIES } from "../graphql/query/ecommerceV1.query";

interface Props {
  site: Site
}

export const Children2: FC<Props> = ({ site }) => {
  const { asPath, query } = useRouter()
  console.log(query.slug);
  
  // console.log(children2(site, query));
  
  switch (asPath) {
    
    // case childrenPaths2(site).find(data => data === asPath):
    //   return <ChildrenPage item={children2(site, query)!} />
    case childrenPaths2(site).find(data => data === asPath):
    if (children2(site, query)!.type === 'products') {
        return <ProductPage item={children2(site, query)!}/>
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
