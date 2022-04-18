import "./Results.scss";
import * as React from "react";
import { ResultsProps } from './models/ResultsTypes';
import { PokemonNode } from '../../shared/interfaces/interfaces';
import { ColumnsType } from 'antd/lib/table';
import { Table } from 'antd';

const Results = (props: ResultsProps) => {
    const { results, loading } = props;

    const columns: ColumnsType<PokemonNode> = [
        { key: 'name', title: 'Name', dataIndex: 'name' },
        { key: 'classification', title: 'Classification', dataIndex: 'classification' },
        { key: 'types', title: 'Types', dataIndex: 'types' }
    ];

    return (
        <div className="Results">
            <Table dataSource={results} columns={columns} loading={loading} />
        </div>
    );
}

export default Results;