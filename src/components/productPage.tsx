
import { FC, Key } from 'react';
import Image from "next/image"

import { Children } from '../interfaces/siteV1';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FURNITURIES } from '../graphql/query/ecommerceV1.query';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Product } from '../interfaces/ecommerceV1';
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
  item: Children
  products: Product[]
}
export const ProductPage: FC<ProductPage> = ({ item, products }) => {
  const { asPath, query } = useRouter()
  // const { data, isValidating, error } = useSWR([FURNITURIES, { site: process.env.API_SITE }])
  // console.log('products', products);

  return (
    <section className='py-10'>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{item.head.name}</h2>
      {/* {
        isValidating
          ?
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6`}>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(i => (
              <Card key={i} />
            ))}
          </div>
          :
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6 ">
            {data.furnitures.filter((data: Wear) => data.article.route === asPath).map((product: Wear) => (
              <Link href={`/detalles/${product.article.slug}`} key={product._id}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src={product.article.image ? product.article.image[0].src : "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
                      alt={product.article.image ? product.article.image[0].alt : "description image"}
                      width={500}
                      height={600}
                      objectFit='cover'
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.article.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.article.price} Bs.</p>
                </a>
              </Link>
            ))}
          </div>
      } */}
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6 ">
            {products.filter(data => data.article.route === asPath).map(product => (
              <Link href={`/detalles/${product.article.slug}`} key={product._id}>
                <a className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <Image
                      src={product.article.image ? product.article.image[0].src : "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
                      alt={product.article.image ? product.article.image[0].alt : "description image"}
                      width={500}
                      height={600}
                      objectFit='cover'
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.article.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.article.price} Bs.</p>
                </a>
              </Link>
            ))}
          </div>

    </section>

  )
}
const Card = () => {
  return (
    <div className="shadow-lg ">
      <Skeleton
        height={365} />
      <Skeleton height={30} />
      <Skeleton height={30} />
    </div>
  )
}