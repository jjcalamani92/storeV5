import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE } from '../graphql'
import { FURNITURIES, GIFTS } from '../graphql/query/ecommerceV1.query'
import { Wear } from '../interfaces/ecommerceV1'
import { Site } from '../interfaces/siteV1'
import { Layout, Routes } from '../layouts'
import { graphQLClient } from '../swr/graphQLClient'
import { paths, seo } from '../utils/functionV1'

interface Props {
  site: Site
  furnitures: Wear[]
  gifts: Wear[]
}

const Slug: FC<Props> = ({site, furnitures, gifts}) => {
  const { query, asPath } = useRouter()
  // console.log(site);
  console.log(furnitures);
  console.log(gifts);
  
  return (
    <Layout head={seo(site, query)}  site={site}>
      <Routes site={site} products={{furnitures, gifts} } />
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
  const { furnitures } = await graphQLClient.request(FURNITURIES, { site: process.env.API_SITE })
  const { gifts } = await graphQLClient.request(GIFTS, { site: process.env.API_SITE })
  return {
    props: { site, furnitures, gifts },
    revalidate: 20,
  }
}
export default Slug
