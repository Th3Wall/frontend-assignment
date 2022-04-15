import * as React from "react"
import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QueryResults } from "../../shared/interfaces";
import { GET_POKEMONS } from "../../graphql/queries";

const Pokemons = () => {
    const [ nameQuery, setNameQuery ] = useState<string>();
    const [ typeQuery, setTypeQuery] = useState<string>();
    const [ fetchPokemons, { loading, error, data }] = useLazyQuery<QueryResults>(GET_POKEMONS);
    const handleNameQuery = (e: React.ChangeEvent<HTMLInputElement>) => setNameQuery(e.target.value);
    const handleTypeQuery = (e: React.ChangeEvent<HTMLInputElement>) => setTypeQuery(e.target.value);

    useEffect(() => {
        fetchPokemons({ variables: {
            q: nameQuery,
            type: typeQuery
        }});
    }, [fetchPokemons, nameQuery, typeQuery]);

    return (
        <>
            <input type="text" placeholder="Search by name" value={nameQuery} onChange={e => handleNameQuery(e)}/>
            <input type="text" placeholder="Filter by type" value={typeQuery} onChange={e => handleTypeQuery(e)}/>

            {!loading && !error && data?.pokemons.edges && data?.pokemons.edges?.map((pokeEdge, idx) => (
                <p key={idx}>
                    <span><b>{pokeEdge.node.name}</b></span>
                    {pokeEdge.node.types && pokeEdge.node.types.map((type, idx) => (
                        <span key={idx}>{` ${type}`}</span>
                    ))}
                    <span> - {pokeEdge.node.classification}</span>
                </p>
            ))}
        </>
    );
}

export default Pokemons