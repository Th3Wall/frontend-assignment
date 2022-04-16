
import React from 'react'
import { SpinnerProps } from './models/Spinner.types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = (props: SpinnerProps) => {
    const { fontSize = 42 } = props;
    const antIcon = <LoadingOutlined style={{ fontSize }} spin />;

    return (
        <Spin indicator={antIcon} />
    )
}

export default Spinner