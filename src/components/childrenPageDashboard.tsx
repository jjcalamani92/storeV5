
import { FC } from 'react';
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeadingDashboardPages, HeadingDashboardProducts } from './heading';
import { ChildrenV2, SiteV2 } from '../interfaces/siteV2';
import { children0Dashboard, getChildrenDashboard } from '../utils/functionV2';
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
  site: SiteV2
}
export const ChildrenPageDashboard: FC<ChildrenPage> = ({ site }) => {
  const { asPath, query } = useRouter()
  const data = getChildrenDashboard(site, asPath)

  return (
    <section className=''>
      <HeadingDashboardPages title={data?.seo.name!} site={site} />
      {
        data?.children ?
          <div className="mt-6 space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:grid-cols-5">
            {data.children.map((data, i) => (
              <Link key={i} href={`${asPath}/${data.slug}`}>
                <a className="shadow-xl hover:shadow-2xl">
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

                    <h3 className="mt-2 text-sm text-gray-500">
                      {data.seo.name}
                    </h3>
                    {/* <p className="text-base font-semibold text-gray-900 mb-0">{data.seo.description}</p> */}
                  </div>
                </a>
              </Link>
            ))}
          </div>
          : null
      }


    </section>
  )
}
