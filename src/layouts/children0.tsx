import { useRouter } from "next/router";
import { FC } from "react"
import { Site } from "../interfaces/siteV1";
import { Hero } from "../components/hero";
import { ChildrenPage } from '../components/childrenPage';
import { children0 } from '../utils/functionV1';

interface Props {
  site: Site
}

export const Children0: FC<Props> = ({ site }) => {
  const { asPath, query } = useRouter()

  switch (asPath) {
    case '/':
      return <Hero />
    case '/tienda':
      return <ChildrenPage item={children0(site, query)!} />
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
