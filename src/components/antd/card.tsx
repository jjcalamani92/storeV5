import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useSWRConfig } from 'swr';
import { CREATE_GIFT_PRODUCT, DELETE_FURNITURE_PRODUCT, DELETE_GIFT_PRODUCT } from '../../graphql/mutation/ecommerceV1.mutation';
import { FURNITURIES, GIFTS } from '../../graphql/query/ecommerceV1.query';
import { Product } from '../../interfaces/ecommerceV1';
import { graphQLClient } from '../../react-query/graphQLClient';
import { useRouter } from 'next/router';
import Swal from "sweetalert2";
import { ProductV2 } from '../../interfaces/ecommerceV2';

const { Meta } = Card;
interface CardComponent {
  product: ProductV2
}

export const CardComponent:FC<CardComponent> = ({product}) => {
  const { push, asPath, query} = useRouter()
  
  const { mutate } = useSWRConfig()
  const onEdit = () => {
    push(`${asPath}/${product.article.slug}`)
  }
  const onDelete =  async() => {
    Swal.fire({
			title: 'Está seguro?',
			text: "No podrás revertir esto!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, bórralo!'
		}).then( async (result) => {
			if (result.isConfirmed ) {
				Swal.fire({ 
						title: 'Eliminado!',
						text: 'El producto ha sido eliminado.',
						icon: 'success',
						timer: 1000,
						showConfirmButton: false,
					})
          let REMOVE
          let PRODUCTS
          if (query.slug![2] ==='furniture') {
            REMOVE = DELETE_FURNITURE_PRODUCT 
            PRODUCTS = FURNITURIES
          } else {
            REMOVE = DELETE_GIFT_PRODUCT
            PRODUCTS = GIFTS
          }
        await graphQLClient.request(REMOVE,  {_id: product._id})
        mutate([PRODUCTS, { site: process.env.API_SITE }])
			}
		})
  }
  return (
        <Card
          size="small"
          cover={
            <Image
              width={400}
              height={400}
              src={product.article.image ? product.article.image[0].src : "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655217461/14.1_no-image.jpg_gkwtld.jpg"}
              alt={product.article.image ? product.article.image[0].alt : "description image"}
            />
          }
          actions={[
            <EditOutlined key="edit" onClick={onEdit} />,
            <DeleteOutlined key="delete" onClick={() => onDelete()} />,
            // <PopConfirmComponent key="remove" />
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={product.article.name}
            description={product.article.mark}

          />
        </Card>
      
  )
}
