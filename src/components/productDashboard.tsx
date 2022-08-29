import { DataNode } from "antd/lib/tree"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, useState } from "react"
import { SiteV2 } from "../interfaces/siteV2"
import { lastElement } from "../utils/function"
import { HeadingDashboardProducts } from "./heading"

interface ProductDashboard {
  site: SiteV2
}
export const ProductDashboard:FC<ProductDashboard> = ({site}) => {
  const date = [
    {
      title: 'Muebles',
      href: 'furniture',
      imageSrc: "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1661482465/b8hidxczj5jh68rajblg.jpg"
    },
    {
      title: 'Regalos',
      href: 'gift',
      imageSrc: "https://res.cloudinary.com/dqsbh2kn0/image/upload/v1661482466/q5lch3ezvv5mjq62zogk.png"
    },
    // {
    //   title: 'products',
    //   href: 'products',
    //   imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
    // },
    // {
    //   title: 'marks',
    //   href: 'marks',
    //   imageSrc: "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"
    // },
  ]
  const { asPath } = useRouter()
// console.log(asPath);

  return (
    <>
      <HeadingDashboardProducts title={lastElement(asPath)} site={site} />
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 lg:grid-cols-5 ">
        {
          date.map(data => (

            <Link key={data.title} href={`${asPath}/${data.href}`} >
              <a className='shadow-lg '>
                <div className="w-full bg-white rounded-sm overflow-hidden leading-none">
                  <Image
                    src={data.imageSrc}
                    alt={data.title}
                    width={300}
                    height={300}
                    objectFit={'cover'}
                  />
                </div>
                <div className="p-2 flex justify-between">
                  <h3 className="text-xs md:text-sm text-gray-700">
                    {data.title}
                  </h3>
                </div>
              </a>
            </Link>
          ))
        }
        {/* <Button bg="none" content='eliminar' click={() => onDelete(_id)} /> */}
      </div>
    </>
  )
}