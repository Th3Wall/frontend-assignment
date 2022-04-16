import "./PageContent.scss"
import * as React from "react";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { PokemonNode, QueryResults } from "../../shared/interfaces/interfaces";
import { GET_POKEMONS, GET_POKEMON_TYPES } from '../../graphql/queries';
import { Col, Layout, Row, Select, Table} from "antd";
import { ColumnsType } from "antd/lib/table";
import Input from "antd/lib/input/Input";

const PageContent = () => {
    const { Option } = Select;
    const [ nameQuery, setNameQuery ] = useState<string>();
    const [ typeQuery, setTypeQuery ] = useState<string>();
    const handleNameQuery = (e: string) => setNameQuery(e);
    const handleTypeQuery = (e: string) => setTypeQuery(e);
    
    const [ fetchPokemons, { loading, data } ] = useLazyQuery<QueryResults>(GET_POKEMONS);
    const { data: pokemonTypesList } = useQuery<QueryResults>(GET_POKEMON_TYPES);

    const pokemonList = data?.pokemons.edges.map(({ node: { id, name, types, classification }}) => ({
        id, name, types: types.join(', '), classification
    }));
    
    const columns: ColumnsType<PokemonNode> = [
        { key: 'name', title: 'Name', dataIndex: 'name' },
        { key: 'classification', title: 'Classification', dataIndex: 'classification' },
        { key: 'types', title: 'Types', dataIndex: 'types' }
    ];
    
    useEffect(() => {
        fetchPokemons({ variables: {
            q: nameQuery,
            type: typeQuery
        }});
    }, [fetchPokemons, nameQuery, typeQuery]);

    return (
        <Layout.Content className="PageContent">
            <Row>
                <Col span={24}>
                    <div className="search__wrp">
                        <Input
                            type="text"
                            size="large"
                            placeholder="Search Pokémon by name"
                            value={nameQuery}
                            onChange={e => handleNameQuery(e.target.value)}
                        />
                        <Select
                            className="search__select"
                            defaultValue="All types"
                            size="large"
                            dropdownMatchSelectWidth
                            onChange={(e) => handleTypeQuery(e)}
                        >
                            <Option key="all" value="">All types</Option>
                            {pokemonTypesList && pokemonTypesList.pokemonsTypes.map((type, idx) => (
                                <Option key={idx} value={type}>{type}</Option>
                            ))}
                        </Select>
                    </div>

                    <div className="results__wrp">
                        <Table dataSource={pokemonList} columns={columns} loading={loading} />
                    </div>
                </Col>
            </Row>
        </Layout.Content>
    );
}

export default PageContent;