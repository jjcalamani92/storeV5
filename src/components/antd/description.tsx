import { Badge, Descriptions } from 'antd';
import React from 'react';

const Description: React.FC = () => (
  <Descriptions title="" bordered>
    <Descriptions.Item label="Material" span={3}>Madera Pino procesada</Descriptions.Item>
    <Descriptions.Item label="Color" span={3}>Como se ve en la imagen</Descriptions.Item>
    <Descriptions.Item label="Acabado" span={3}>Relieve brillante de lujo</Descriptions.Item>
    <Descriptions.Item label="Logotipo" span={3}> Mosaico Estampado en caliente, pintado a mano</Descriptions.Item>
    <Descriptions.Item label="Accesorios" span={3}>Fieltro, Goma eva</Descriptions.Item>
    {/* <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item> */}
    <Descriptions.Item label="Dimensiones">
      Alto: 6 [cm]
      <br />
      Ancho: 21 [cm]
      <br />
      Profundidad: 8 [cm]
      <br />
      
    </Descriptions.Item>
  </Descriptions>
);

export default Description;