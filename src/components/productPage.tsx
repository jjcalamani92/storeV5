
import { FC, Key } from 'react';
import Image from "next/image"

import { Children, Site } from '../interfaces/siteV1';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FURNITURIES, FURNITURIES1 } from '../graphql/query/ecommerceV1.query';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Product, Wear } from '../interfaces/ecommerceV1';
import { HeadingDashboardProducts } from './heading';
import useState from 'react';
import CardAntd, { CardComponent } from './antd/card';
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

interface ProductPage {
  item?: Children
  products: Product[]
  site: Site
}
export const ProductPage: FC<ProductPage> = ({ item, products, site }) => {
  const { asPath, query } = useRouter()
  const { data, isValidating, error } = useSWR([FURNITURIES, { site: process.env.API_SITE }])
  
  const card = []
  for (let i = 0; i < 10; i++) {
    card.push(<Card key={i} />)
  }
  return (
    <section className='py-10'>
      <HeadingDashboardProducts title='Products' site={site} />
      {
        isValidating
          ?
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6`}>
            { card }
          </div>
          :
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 mt-6 ">
            {data.furnitures.map((product: Product, i:number) => (
              <CardComponent key={i} product={product} />
            ))}
          </div>
      }
    </section>
  )
}
const Card = () => {
  return (
    <div className="shadow-lg ">
      <Skeleton
        height={250} />
      <Skeleton height={30} />
      <Skeleton height={30} />
    </div>
  )
}