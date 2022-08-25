import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useSWRConfig } from 'swr';
import { DELETE_FURNITURE_PRODUCT } from '../../graphql/mutation/ecommerceV1.mutation';
import { FURNITURIES } from '../../graphql/query/ecommerceV1.query';
import { Product } from '../../interfaces/ecommerceV1';
import { graphQLClient } from '../../swr/graphQLClient';
import { useRouter } from 'next/router';

const { Meta } = Card;
interface CardComponent {
  product: Product
}

export const CardComponent:FC<CardComponent> = ({product}) => {
  const { push } = useRouter()
  const { mutate } = useSWRConfig()
  const onEdit = () => {
    push(`/dashboard/products/furniture/${product.article.slug}`)
  }
  const onDelete =  async() => {
    await graphQLClient.request(DELETE_FURNITURE_PRODUCT,  {_id: product._id})
    mutate([FURNITURIES, { site: process.env.API_SITE }])
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
          ]}
        >
          <Meta
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={product.article.title}
            description={product.article.mark}

          />
        </Card>
      
  )
}
const CardAntd: React.FC = () => (

  <Card
    // style={{ width: 300 }}
    size="small"
    cover={
      <Image
        width={400}
        height={400}
        alt="example"
        src="https://res.cloudinary.com/dno4gyfgn/image/upload/v1661313191/2022-08-24T03:53:11.310Z.jpg"
      />
    }
    actions={[
      // <SettingOutlined key="setting"  />,
      <DeleteOutlined key="delete" />,
      // <EditOutlined key="edit" />,
      // <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"

    />
  </Card>
);

export default CardAntd;