import { Breadcrumb } from 'antd';
import React from 'react';

const BreadcrumbAntd: React.FC = () => (
  <div className='my-6'>
  <Breadcrumb >
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
  </div>
);

export default BreadcrumbAntd;