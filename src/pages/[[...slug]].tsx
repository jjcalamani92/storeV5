import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE } from '../graphql'
import { Site } from '../interfaces/siteV1'
import { Layout, Routes } from '../layouts'
import { graphQLClient } from '../swr/graphQLClient'
import { paths, seo } from '../utils/functionV1'

interface Props {
  site: Site
}

const Slug: FC<Props> = ({site}) => {
  const { query, asPath } = useRouter()
  // console.log(site);
  
  return (
    <Layout head={seo(site, query)}  site={site}>
      <Routes site={site} />
    </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { site } = await graphQLClient.request(SITE, { _id: process.env.API_SITE })
  return {
    paths: paths(site).map(data =>( {params: data})),
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { site } = await graphQLClient.request(SITE, { _id: process.env.API_SITE })
  return {
    props: { site },
    revalidate: 20,
  }
}
export default Slug
