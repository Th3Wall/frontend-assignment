import * as React from "react"
import { GET_POKEMONS } from "../../graphql/queries";
import { QueryResults } from "../../shared/interfaces";
import { useLazyQuery } from "@apollo/client";

const Pokemons = () => {
    const [ fetchPokemons, { loading, error, data }] = useLazyQuery<QueryResults>(GET_POKEMONS, {
        variables: { q: "Pikachu" },
        onCompleted: (data) => console.log(data)
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;

    return (
        <>
            <button onClick={() => fetchPokemons()}>Fetch</button>
            {!loading && !error && data?.pokemons?.edges && data?.pokemons?.edges?.map((edge, idx) => (
                <p key={idx}>
                    <span><b>{edge?.node?.name}</b></span>
                    {edge?.node?.types && edge?.node?.types.map((type, idx) => (
                        <span key={idx}>{` ${type}`}</span>
                    ))}
                    <span> - {edge?.node?.classification}</span>
                </p>
            ))}
        </>
    );
}

export default Pokemons