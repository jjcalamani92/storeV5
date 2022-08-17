import { useRouter } from 'next/router';
import { FC } from "react"
import { Page404 } from '../components/404';
import useSWR from 'swr';
import { SITES } from '../graphql';
import { Site } from '../interfaces/siteV1';
import { Children0 } from './children0';
import { childrens0, childrens1, childrens2, childrenPaths0, childrenPaths1, childrenPaths2, seo, children0, paths } from '../utils/functionV1';
import { Children1 } from './children1';
import { Children2 } from './children2';

interface Routes {
  site: Site
}
export const Routes: FC<Routes> = ({ site }) => {

  const { asPath, query } = useRouter()
  const { data, isValidating, error } = useSWR(SITES)
  // console.log();
  
  switch (asPath) {
    case childrenPaths0(site).find(data => data === asPath):
      return <Children0 site={site}/>
    case childrenPaths1(site).find(data => data === asPath):
      return <Children1 site={site}/>
    case childrenPaths2(site).find(data => data === asPath):
      return <Children2 site={site}/>

    default:
      return <Page404 />

  }
}