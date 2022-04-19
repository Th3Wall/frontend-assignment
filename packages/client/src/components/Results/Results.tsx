import "./Results.scss";
import * as React from "react";
import { ResultsProps } from './models/ResultsTypes';
import { PokemonNode } from '../../shared/interfaces/interfaces';
import { ColumnsType } from 'antd/lib/table';
import { Button, Table } from 'antd';
import openedPokeball from "../../assets/images/opened_pokeball.png";

const NoResults = () => (
    <div className="Results__empty">
        <img className="Results__empty--img" src={openedPokeball} alt="No results found" />
        <p className="Results__empty--text">No pokè-results found</p>
    </div>
);

const Results = (props: ResultsProps) => {
    const { results, loading, hasMoreData, loadMoreHandler } = props;

    // Little trick to customize Antd's empty table message
    const locale = {
        emptyText: <NoResults />
    };
    
    const columns: ColumnsType<PokemonNode> = [
        { key: 'name', title: 'Name', dataIndex: 'name' },
        { key: 'classification', title: 'Classification', dataIndex: 'classification' },
        { key: 'types', title: 'Types', dataIndex: 'types' }
    ];

    return (
        <div className="Results">
            <Table dataSource={results} columns={columns} loading={loading} locale={locale} pagination={false} />
            {hasMoreData && (
                <Button className="Results__loadMore" disabled={loading} onClick={() => loadMoreHandler()}>Load More</Button>
            )}
        </div>
    );
}

export default Results;