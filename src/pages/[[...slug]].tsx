import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FURNITURE_BY_SLUG, FURNITURIES, GIFTS, GIFT_BY_SLUG, JEWELERS, JEWELER_BY_SLUG, TEDDYS, TEDDY_BY_SLUG } from '../graphql/query/ecommerceV2.query'
import { SITEV2 } from '../graphql/query/siteV2.query'
import { LayoutPages, Routes, LayoutDashboard } from '../layouts'
import { graphQLClient, graphQLClientP, graphQLClientS } from '../react-query/graphQLClient'
import { getSite, useGetProductsFurniture, useGetProductsGift, useGetProductsJeweler, useGetProductsTeddy, useGetSite } from '../react-query/reactQuery'

import { children0, childrens0, paths, seoV2 } from '../utils/functionV2';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { Page404 } from '../components'

interface Props {
  
}

const Slug: FC<Props> = () => {
  const { query, asPath } = useRouter()
  const { data: site } = useGetSite(process.env.API_SITE!);
  const { data: furnitures } = useGetProductsFurniture(process.env.API_SITE!);
  const { data: gifts  } = useGetProductsGift(process.env.API_SITE!);
  const { data: teddys  } = useGetProductsTeddy(process.env.API_SITE!);
  const { data: jewelers  } = useGetProductsJeweler(process.env.API_SITE!);
  const products = {furnitures, gifts, teddys, jewelers}
  const { data: session, status } = useSession()
  // console.log(session);

  return (
    <>
      {
      query.slug && query.slug[0] === "dashboard"   
      ?
        <LayoutDashboard >
          <Routes />
        </LayoutDashboard>
      // (
      //   status === "authenticated" ?
      //   :
      //   <Page404 />
      // )
      :
      query.slug && query.slug[0] === "auth" 
      ?
        <Routes />
      :
      <LayoutPages seo={seoV2(site!, asPath, products)!} site={site!}>
        <Routes />
      </LayoutPages>
    }
      
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { siteV2 } = await graphQLClientS.request(SITEV2, { _id: process.env.API_SITE })
  return {
    paths: paths(siteV2).map(data =>( {params: data})),
    // paths: [{ params: { slug: [] } }],
    fallback: 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  // const { params } = ctx
  // console.log(ctx);
  
  const { slug = [] } = params as { slug: string[] }
  const _id = process.env.API_SITE!
  const site = process.env.API_SITE

  const queryClient = new QueryClient()
  
  await queryClient.prefetchQuery(["get-site", _id],  async () => {
    const { siteV2 } = await graphQLClientS.request(
      SITEV2,
      { _id }
    );
    return siteV2;
  })

  await queryClient.prefetchQuery(["get-products-furniture", site], async () => {
    const { furnitures } = await graphQLClientP.request( FURNITURIES, { site } );
    return furnitures;
  })
  await queryClient.prefetchQuery(["get-products-gift", site], async () => {
    const { gifts } = await graphQLClientP.request( GIFTS, { site } );
    return gifts;
  })
  await queryClient.prefetchQuery(["get-products-teddy", site], async () => {
    const { teddys } = await graphQLClientP.request( TEDDYS, { site } );
    return teddys;
  })
  await queryClient.prefetchQuery(["get-products-jeweler", site], async () => {
    const { jewelers } = await graphQLClientP.request( JEWELERS, { site } );
    return jewelers;
  })

  if ((slug[0] === 'detalles' && slug[1] ==='jeweler') || (slug[0] === 'dashboard' && slug[2] ==='jeweler')  ) {
    const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
    await queryClient.prefetchQuery(["get-product-jeweler-by-slug", slug], async () => {
      const { jewelerBySlug } = await graphQLClientP.request( JEWELER_BY_SLUG, { slug } );
      return jewelerBySlug;
    })
  } else if ((slug[0] === 'detalles' && slug[1] ==='teddy') || (slug[0] === 'dashboard' && slug[2] ==='teddy')  ) {
    const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
    await queryClient.prefetchQuery(["get-product-teddy-by-slug", slug], async () => {
      const { teddyBySlug } = await graphQLClientP.request( TEDDY_BY_SLUG, { slug } );
      return teddyBySlug;
    })
  } else if ((slug[0] === 'detalles' && slug[1] ==='furniture') || (slug[0] === 'dashboard' && slug[2] ==='furniture')  ) {
    const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
    await queryClient.prefetchQuery(["get-product-furniture-by-slug", slug], async () => {
      const { furnitureBySlug } = await graphQLClientP.request( FURNITURE_BY_SLUG, { slug } );
      return furnitureBySlug;
    })
  } else if ((slug[0] === 'detalles' && slug[1] ==='gift') || (slug[0] === 'dashboard' && slug[2] ==='gift')) {
    const slug = params?.slug![0] === 'detalles' ? params?.slug![2] : params?.slug![3]
    await queryClient.prefetchQuery(["get-product-gift-by-slug", slug], async () => {
      const { giftBySlug } = await graphQLClientP.request( GIFT_BY_SLUG, { slug } );
      return giftBySlug;
    })
  }


  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 86400,
  }
}
export default Slug
