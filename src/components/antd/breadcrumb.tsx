import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { getProductRoute } from '../../utils/functionV1';
  const link = [
    {
      name: "Tienda",
      href: "/tienda"
    },
    {
      name: "Muebles",
      href: "/tienda/muebles"
    },
    {
      name: "Para El Escritorio",
      href: "/tienda/muebles/para-el-escritorio"
    },
    {
      name: "Porta Lapices M3"
    },
  ]
  interface Route {
    name: string
    href?: string
  }
  interface BreadcrumbComponent {
    route: any[]
  }

export const BreadcrumbComponent: FC<BreadcrumbComponent> = ({route}) => {
  const { asPath } = useRouter()
  
  return (
    <div className='my-6'>
      <Breadcrumb >
      {
        route.map(data => data.href ? (

        <Breadcrumb.Item key={data.href}>
          <Link href="/tienda">
            <a>{data.name}</a>
          </Link>
        </Breadcrumb.Item>
        ) : 
        <Breadcrumb.Item>
          {data.name}
          
        </Breadcrumb.Item>
        )
      }
           
        
      </Breadcrumb>
    </div>
  );
} 