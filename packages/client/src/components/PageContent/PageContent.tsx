import "./PageContent.scss"
import * as React from "react";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QueryResults } from "../../shared/interfaces/interfaces";
import { GET_POKEMONS, GET_POKEMON_TYPES } from '../../graphql/queries';
import Search from '../Search/Search';
import Results from '../Results/Results';
import { Col, Layout, Row } from "antd";

const PageContent = () => {
    const [ nameQuery, setNameQuery ] = useState<string>("");
    const [ typeQuery, setTypeQuery ] = useState<string>();
    const handleNameQuery = (e: string) => setNameQuery(e);
    const handleTypeQuery = (e: string) => setTypeQuery(e);
    
    const [ fetchPokemons, { loading, data } ] = useLazyQuery<QueryResults>(GET_POKEMONS);
    const { data: pokemonTypesList } = useQuery<QueryResults>(GET_POKEMON_TYPES);

    const pokemonList = data?.pokemons.edges.map(({ node: { id, name, types, classification }}) => ({
        id, name, types: types.join(', '), classification
    }));
    
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
                    {pokemonTypesList && (
                        <Search
                            nameQuery={nameQuery}
                            pokemonTypesList={pokemonTypesList}
                            nameQueryHandler={handleNameQuery}
                            typeQueryHandler={handleTypeQuery}
                        />
                    )}
                    {pokemonList && <Results results={pokemonList} loading={loading} />}
                </Col>
            </Row>
        </Layout.Content>
    );
}

export default PageContent;