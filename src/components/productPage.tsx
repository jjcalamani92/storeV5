
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
import { Spinner00, Spinner01 } from './spinner';
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
  // console.log(data.furnitures.sort((a,b) => a.));
  
  return (
    <section className=''>
      <HeadingDashboardProducts title='Products' site={site} />
      {
        isValidating
          ?
          //   <div className="h-min flex justify-center">
          //     <div className="flex items-center ">

          //         <Spinner01 />
          //     </div>
          // </div>
          <div className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 `}>
            { card }
          </div>
          :
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-5 ">
            {/* { card } */}
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
    <div className="shadow-lg">
      {/* <Skeleton.Image active={true} style={{  width: '100%' }}/> */}
      <Skeleton
        height={220} />
      <Skeleton height={70} />
      <Skeleton height={50} />
    </div>
  )
}