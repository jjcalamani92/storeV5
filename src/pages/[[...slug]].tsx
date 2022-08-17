import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE } from '../graphql'
import { Site } from '../interfaces/siteV1'
import { Layout, Routes } from '../layouts'
import { graphQLClient } from '../swr/graphQLClient'
import { seo } from '../utils/function'

interface Props {
  site: Site
}

const Slug: FC<Props> = ({site}) => {
  const { query, asPath } = useRouter()
  // console.log(site);
  
  return (
    <Layout site={site}>
      <Routes site={site} />
    </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{params : {slug: []}}, {params : {slug: ['aboutme']}}],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { site } = await graphQLClient.request(SITE, { _id: process.env.API_SITE })
  return {
    props: { site },
    revalidate: 10,
  }
}
export default Slug
