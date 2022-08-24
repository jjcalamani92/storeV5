import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SITE } from '../graphql'
import { FURNITURIES, GIFTS } from '../graphql/query/ecommerceV1.query'
import { Wear } from '../interfaces/ecommerceV1'
import { Site } from '../interfaces/siteV1'
import { LayoutPages, Routes } from '../layouts'
import { LayoutDashboard } from '../layouts/layout_dashboard'
import { graphQLClient } from '../swr/graphQLClient'
import { childrenPaths2, paths, seo } from '../utils/functionV1'

interface Props {
  site: Site
  furnitures: Wear[]
  gifts: Wear[]
}

const Slug: FC<Props> = ({site, furnitures, gifts}) => {
  const { query, asPath } = useRouter()
  console.log(query);
  
  return (
    <>
    {
      query.slug && query.slug[0] === "dashboard" 
      ?
      <LayoutDashboard >
        <Routes site={site} products={{furnitures, gifts} } />
      </LayoutDashboard>
      :
      <LayoutPages head={seo(site, query)}  site={site}>
        <Routes site={site} products={{furnitures, gifts} } />
      </LayoutPages>
    }
    </>
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
    props: { site, furnitures, gifts, 
    //   fallback: {
    //   [FURNITURIES]:
    // },
  },
    revalidate: 20,
  }
}
export default Slug
