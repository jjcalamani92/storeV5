import { Badge, Descriptions } from 'antd';
import React from 'react';

const detail = [
  {label: "Material", content:"Madera Pino procesada"},
  {label: "Color", content:"Como se ve en la imagen"},
  {label: "Acabado", content:"Relieve brillante de lujo"},
  {label: "Logotipo", content:"Mosaico Estampado en caliente, pintado a mano"},
  {label: "Accesorios", content:"Fieltro, Goma eva"},
]

const Description: React.FC = () => (
  <Descriptions title="" bordered>
    {
    detail.map(data => 
      <Descriptions.Item label={data.label} span={3} key={data.label}>{data.content}</Descriptions.Item>
      )
    }
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