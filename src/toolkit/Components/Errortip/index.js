import React from 'react';
import { Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const Errortip = ({ title }) => {
  return (
    <Tooltip placement={'top'} title={title}>
      <ExclamationCircleOutlined
        style={{ color: '#eb2f96', fontSize: '14px' }}
      />
    </Tooltip>
  );
};

export default Errortip;
