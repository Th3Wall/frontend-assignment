import "./PageContent.scss"
import * as React from "react";
import { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { QueryResults } from "../../shared/interfaces/interfaces";
import { GET_POKEMONS, GET_POKEMON_TYPES } from '../../graphql/queries';
import Heading from "../Heading/Heading";
import Search from '../Search/Search';
import Results from '../Results/Results';
import Error from "../Error/Error";
import { Col, Layout, Row } from "antd";

const PageContent = () => {
    const [ nameQuery, setNameQuery ] = useState<string>("");
    const [ typeQuery, setTypeQuery ] = useState<string>("");
    const handleNameQuery = (e: string) => setNameQuery(e);
    const handleTypeQuery = (e: string) => setTypeQuery(e);
    
    const [ fetchPokemons, { loading, data, error, fetchMore } ] = useLazyQuery<QueryResults>(GET_POKEMONS);
    const { data: pokemonTypesList } = useQuery<QueryResults>(GET_POKEMON_TYPES);

    const pokemonList = data?.pokemons.edges.map(({ node: { id, name, types, classification }}) => ({
        id, name, types: types.join(', '), classification
    }));
    const hasNextPage = data?.pokemons.pageInfo.hasNextPage;
    const endCursor = data?.pokemons.pageInfo.endCursor;
    
    useEffect(() => {
        fetchPokemons({ variables: {
            q: nameQuery,
            type: typeQuery
        }});
    }, [fetchPokemons, nameQuery, typeQuery]);

    const handleLoadMore = () => {
        fetchMore({
            variables: {
                q: nameQuery,
                type: typeQuery,
                after: endCursor
            },
            updateQuery: (prevResults, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prevResults;
                fetchMoreResult.pokemons.edges = [
                    ...prevResults.pokemons.edges,
                    ...fetchMoreResult.pokemons.edges
                ]
                return fetchMoreResult;
            }
        });
    }

    return (
        <Layout.Content className="PageContent">
            <Row>
                <Col span={24}>
                    {error ? <Error /> : (
                        <>
                            <Heading />
                            {pokemonTypesList && (
                                <Search
                                    nameQuery={nameQuery}
                                    pokemonTypesList={pokemonTypesList}
                                    nameQueryHandler={handleNameQuery}
                                    typeQueryHandler={handleTypeQuery}
                                />
                            )}
                            {pokemonList && (
                                <Results
                                    results={pokemonList}
                                    loading={loading}
                                    hasMoreData={hasNextPage}
                                    loadMoreHandler={handleLoadMore}
                                />
                            )}
                        </>
                    )}
                </Col>
            </Row>
        </Layout.Content>
    );
}

export default PageContent;