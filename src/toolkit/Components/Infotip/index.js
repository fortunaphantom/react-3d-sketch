import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const Infotip = ({ title }) => {
  return (
    <Tooltip placement={'top'} title={title}>
      <InfoCircleOutlined style={{ color: '#1890ff', fontSize: '14px' }} />
    </Tooltip>
  );
};

export default Infotip;
