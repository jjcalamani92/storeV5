
import { FC } from 'react';
import Image from "next/image"

import { Children, Site } from '../interfaces/siteV1';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeadingDashboardProducts } from './heading';
import { ChildrenV2, SiteV2 } from '../interfaces/siteV2';
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

interface ChildrenPage {
  item: ChildrenV2[]
  site: SiteV2
}
export const ChildrenPageDashboard: FC<ChildrenPage> = ({ item, site }) => {
  // console.log(item);
  const {asPath} = useRouter()

  return (
    <section className='py-10'>
      <HeadingDashboardProducts title='Products' site={site} />
      <h2 className="text-2xl font-bold text-gray-900">Pages</h2>
      <div className="mt-6 space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {item.map((data, i) => (
          <Link key={i} href={`${asPath}/${data.seo.href}`}>
          <a className="shadow-xl">
            <div className="w-full bg-white rounded-lg   leading-none relative">
              <Image
                src={data.seo.image.src}
                alt={data.seo.image.alt}
                width={500}
                height={600}
                objectFit='cover'
                />
            </div>
            <div className='p-2'>

            <h3 className="mt-6 text-sm text-gray-500">
              
                {data.seo.name}
            </h3>
            <p className="text-base font-semibold text-gray-900">{data.seo.description}</p>
            </div>
          </a>
                </Link>
        ))}
      </div>
    </section>

  )
}
